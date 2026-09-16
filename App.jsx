import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import SignUpForm from "./SignUpForm";
import Profile from "./Profile";
import Feed from "./Feed";

export default function App() {

  return (

    <div className="app-shell">

      <Navbar />

      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/signup"
            element={<SignUpForm />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/feed"
            element={<Feed />}
          />

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

      </main>

      <Footer />

    </div>

  );

}
