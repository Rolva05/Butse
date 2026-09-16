import {
  Link
} from "react-router-dom";


const features = [

  {
    icon: "01",

    title:
      "Connect with Peers",

    text:
      "Build an academic network around shared subjects, interests and campus experiences."
  },

  {
    icon: "02",

    title:
      "Share Academic Ideas",

    text:
      "Post questions, thoughts and useful academic content for the student community."
  },

  {
    icon: "03",

    title:
      "Build Your Profile",

    text:
      "Create a clear academic identity with your campus, interests and personal bio."
  }

];


export default function Home() {

  return (

    <>

      <section className="hero">

        <div className="container hero-content">

          <div className="hero-copy">

            <span className="eyebrow light">
              RICHFIELD STUDENT COMMUNITY
            </span>


            <h1>
              Connect.
              Learn.
              <span>
                Grow.
              </span>
            </h1>


            <p>
              Richfield Connect is a professional
              academic social platform where students
              can build profiles, exchange ideas and
              collaborate with peers.
            </p>


            <div className="hero-actions">

              <Link
                className="btn btn-white"
                to="/signup"
              >
                Register Now
              </Link>


              <Link
                className="text-link light-link"
                to="/about"
              >
                Explore the platform →
              </Link>

            </div>

          </div>


          <div className="hero-card">

            <div className="hero-logo">
              RC
            </div>

            <p>
              Academic networking
            </p>

            <strong>
              Built for Richfield students
            </strong>

          </div>

        </div>

      </section>


      <section className="page-section container">

        <div className="section-heading centered">

          <span className="eyebrow">
            WHY RICHFIELD CONNECT?
          </span>

          <h2>
            One space for academic engagement
          </h2>

          <p>
            Designed around professionalism,
            academic integrity and peer collaboration.
          </p>

        </div>


        <div className="feature-grid">

          {features.map(
            (feature) => (

              <article
                className="feature-card card"
                key={feature.title}
              >

                <div className="feature-number">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </article>

            )
          )}

        </div>

      </section>

    </>

  );

}
