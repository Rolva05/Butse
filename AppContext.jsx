import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import About from "./views/About";
import SignUpForm from "./components/SignUpForm";
import Profile from "./views/Profile";
import Feed from "./views/Feed";

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