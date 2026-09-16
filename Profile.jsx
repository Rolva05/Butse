import {
  Link
} from "react-router-dom";

import {
  useAppContext
} from "../context/AppContext";


export default function Profile() {

  const { state } =
    useAppContext();


  const user = state.user;


  if (!user) {

    return (

      <section className="page-section container empty-state">

        <div className="empty-icon">
          RC
        </div>

        <h1>
          No profile found
        </h1>

        <p>
          Create your Richfield Connect profile
          to view your student information here.
        </p>

        <Link
          className="btn btn-primary"
          to="/signup"
        >
          Register Now
        </Link>

      </section>

    );

  }


  const initials =
    user.fullName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(
        (part) => part[0]
      )
      .join("")
      .toUpperCase();


  const posts =
    state.posts.filter(
      (post) =>
        post.username === user.fullName
    ).length;


  const connections =
    user.interests.length;


  const groups =
    new Set(
      user.interests
    ).size;


  return (

    <section className="page-section container">


      <div className="profile-header card">

        <div className="avatar profile-avatar">

          {initials}

        </div>


        <div className="profile-heading">

          <span className="eyebrow">
            STUDENT PROFILE
          </span>

          <h1>
            {user.fullName}
          </h1>

          <p>
            {user.campus}
            {" · "}
            Student {user.studentNumber}
          </p>

        </div>

      </div>


      <div className="profile-grid">


        <section className="card profile-details">

          <h2>
            About the student
          </h2>


          <div className="detail-row">

            <span>
              Email
            </span>

            <strong>
              {user.email}
            </strong>

          </div>


          <div className="detail-row">

            <span>
              Campus
            </span>

            <strong>
              {user.campus}
            </strong>

          </div>


          <div className="detail-row">

            <span>
              Student Number
            </span>

            <strong>
              {user.studentNumber}
            </strong>

          </div>


          <div className="detail-row block-detail">

            <span>
              Interests
            </span>


            <div className="tag-list">

              {user.interests.map(
                (interest) => (

                  <span
                    className="tag"
                    key={interest}
                  >
                    {interest}
                  </span>

                )
              )}

            </div>

          </div>


          <div className="detail-row block-detail">

            <span>
              Bio
            </span>

            <p>
              {user.bio}
            </p>

          </div>

        </section>


        <aside className="card stats-card">

          <h2>
            Activity
          </h2>


          <div className="stats-row">

            <div>

              <strong>
                {posts}
              </strong>

              <span>
                Posts
              </span>

            </div>


            <div>

              <strong>
                {connections}
              </strong>

              <span>
                Connections
              </span>

            </div>


            <div>

              <strong>
                {groups}
              </strong>

              <span>
                Groups
              </span>

            </div>

          </div>


          <Link
            className="btn btn-primary full-width"
            to="/feed"
          >
            Go to Feed
          </Link>

        </aside>

      </div>

    </section>

  );

}