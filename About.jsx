const guidelines = [

  "Communicate respectfully with fellow students and staff.",

  "Share academic content responsibly and acknowledge sources where appropriate.",

  "Do not post abusive, discriminatory, threatening or inappropriate material.",

  "Protect your own privacy and do not share another person's personal information.",

  "Keep discussions relevant to academic engagement and constructive peer collaboration.",

  "Use the platform in accordance with Richfield policies and academic integrity requirements."

];


export default function About() {

  return (

    <section className="page-section container narrow-page">

      <div className="section-heading">

        <span className="eyebrow">
          ABOUT THE PLATFORM
        </span>

        <h1>
          Academic connection with an
          institutional focus
        </h1>

        <p>
          Richfield Connect is designed for students
          who want a structured digital environment
          for academic networking and peer engagement.
        </p>

      </div>


      <div className="info-grid">


        <section className="card info-card">

          <h2>
            Purpose
          </h2>

          <p>
            The platform enables students to register
            an academic profile, share posts and
            thoughts, engage with community content
            through likes and comments, and manage
            their own content.
          </p>

          <p>
            It is intentionally different from general
            public social media by focusing on
            professionalism, academic integrity and
            peer collaboration.
          </p>

        </section>


        <section className="card info-card">

          <h2>
            Community Guidelines
          </h2>


          <ul className="guideline-list">

            {guidelines.map(
              (item) => (

                <li key={item}>
                  {item}
                </li>

              )
            )}

          </ul>

        </section>

      </div>


      <section className="contact-panel">

        <div>

          <span className="eyebrow light">
            CONTACT
          </span>

          <h2>
            Richfield Connect Support
          </h2>

          <p>
            For this academic project, use the
            institutional contact details supplied
            by your campus where required.
          </p>

        </div>


        <div className="contact-details">

          <p>
            <strong>Email:</strong>
            {" "}
            info@richfield.ac.za
          </p>

          <p>
            <strong>Campus:</strong>
            {" "}
            Richfield Graduate Institute of Technology,
            South Africa
          </p>

        </div>

      </section>

    </section>

  );

}