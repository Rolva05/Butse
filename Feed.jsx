import {
  Link
} from "react-router-dom";

import CreatePost
  from "./CreatePost";

import Post
  from "./Post";

import {
  useAppContext
} from "./AppContext";


export default function Feed() {

  const { state } =
    useAppContext();


  return (

    <section className="page-section container feed-page">


      <div className="section-heading">

        <span className="eyebrow">
          STUDENT FEED
        </span>

        <h1>
          Academic community feed
        </h1>

        <p>
          Share ideas and engage with posts
          from the Richfield Connect community.
        </p>

      </div>


      {!state.user && (

        <div className="notice">

          <strong>
            Register to participate.
          </strong>

          {" "}

          You can browse the feed, but you need
          a registered profile to create posts.

          <Link to="/signup">
            {" "}Register now
          </Link>

        </div>

      )}


      <CreatePost />


      <div className="feed-list">

        {state.posts.length === 0 ? (

          <div className="card empty-feed">

            <h2>
              No posts yet
            </h2>

            <p>
              Be the first student to share
              an academic thought.
            </p>

          </div>

        ) : (

          state.posts.map(
            (post) => (

              <Post
                key={post.id}
                post={post}
              />

            )
          )

        )}

      </div>

    </section>

  );

}
