import {
  NavLink,
  Link
} from "react-router-dom";

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;


  return (

    <header className="site-header">

      <nav
        className="navbar container"
        aria-label="Main navigation"
      >

        <Link
          to="/"
          className="brand"
        >

          <span className="brand-mark">
            RC
          </span>

          <span>

            <strong>
              Richfield
            </strong>

            <small>
              Connect
            </small>

          </span>

        </Link>


        <div className="nav-links">

          <NavLink
            to="/"
            end
            className={linkClass}
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            className={linkClass}
          >
            About
          </NavLink>


          <NavLink
            to="/signup"
            className={linkClass}
          >
            Sign Up
          </NavLink>


          <NavLink
            to="/profile"
            className={linkClass}
          >
            Profile
          </NavLink>


          <NavLink
            to="/feed"
            className={linkClass}
          >
            Feed
          </NavLink>

        </div>

      </nav>

    </header>

  );

}