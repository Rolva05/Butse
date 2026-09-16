import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="site-footer">

      <div className="container footer-grid">

        <div>

          <div className="footer-brand">
            Richfield Connect
          </div>

          <p>
            Academic networking, peer collaboration
            and student engagement in one
            institutional platform.
          </p>

        </div>


        <div>

          <h3>
            Navigation
          </h3>

          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/signup">
              Sign Up
            </Link>

            <Link to="/profile">
              Profile
            </Link>

            <Link to="/feed">
              Feed
            </Link>

          </div>

        </div>


        <div>

          <h3>
            Institution
          </h3>

          <p>
            Richfield Graduate Institute of Technology
          </p>

          <p>
            South Africa
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        © {new Date().getFullYear()}
        {" "}
        Richfield Connect.
        Academic use project.

      </div>

    </footer>

  );

}
