import { useState } from "react";

import {
  useAppContext
} from "../context/AppContext";


export default function CreatePost() {

  const {
    state,
    dispatch
  } = useAppContext();


  const [content, setContent] =
    useState("");


  const [error, setError] =
    useState("");


  function handleSubmit(event) {

    event.preventDefault();


    const cleanContent =
      content.trim();


    if (!cleanContent) {

      setError(
        "Please write something before posting."
      );

      return;

    }


    if (!state.user) {

      setError(
        "Please register a profile before creating a post."
      );

      return;

    }


    const post = {

      id:
        crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`,

      username:
        state.user.fullName,

      timestamp:
        new Date().toISOString(),

      content:
        cleanContent,

      likes: 0,

      liked: false

    };


    dispatch({

      type: "ADD_POST",

      payload: post

    });


    setContent("");

    setError("");

  }


  return (

    <form
      className="card create-post"
      onSubmit={handleSubmit}
    >

      <div className="create-post-title">

        <div className="avatar">

          {state.user?.fullName
            ?.slice(0, 1)
            .toUpperCase() || "?"}

        </div>


        <div>

          <h2>
            Share with your peers
          </h2>

          <p className="muted">
            Post an academic thought,
            question or useful resource.
          </p>

        </div>

      </div>


      <textarea
        value={content}
        onChange={(e) => {

          setContent(
            e.target.value
          );

          if (error) {

            setError("");

          }

        }}
        placeholder={
          state.user
            ? "What would you like to share?"
            : "Register first to create a post."
        }
        rows="4"
        disabled={!state.user}
      />


      {error && (

        <span className="field-error">
          {error}
        </span>

      )}


      <div className="create-post-actions">

        <span className="muted">

          {content.trim().length}
          {" "}
          characters

        </span>


        <button
          className="btn btn-primary"
          type="submit"
          disabled={!state.user}
        >
          Post
        </button>

      </div>

    </form>

  );

}