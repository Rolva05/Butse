import {
  useAppContext
} from "../context/AppContext";


export default function Post({
  post
}) {

  const { dispatch } =
    useAppContext();


  function toggleLike() {

    dispatch({

      type: "TOGGLE_LIKE",

      payload: post.id

    });

  }


  function deletePost() {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this post?"
      );


    if (confirmed) {

      dispatch({

        type: "DELETE_POST",

        payload: post.id

      });

    }

  }


  const date =
    new Date(post.timestamp);


  const formattedDate =
    Number.isNaN(date.getTime())

      ? "Unknown date"

      : date.toLocaleString();


  return (

    <article
      className="card post-card fade-in"
    >

      <div className="post-header">

        <div className="avatar">

          {post.username
            ?.slice(0, 1)
            .toUpperCase() || "R"}

        </div>


        <div className="post-author">

          <strong>
            {post.username}
          </strong>

          <time
            dateTime={post.timestamp}
          >
            {formattedDate}
          </time>

        </div>

      </div>


      <p className="post-content">
        {post.content}
      </p>


      <div className="post-actions">

        <button
          className={
            `action-btn like-btn${
              post.liked
                ? " liked"
                : ""
            }`
          }
          onClick={toggleLike}
          type="button"
        >

          {post.liked
            ? "♥ Liked"
            : "♡ Like"}

          {" "}

          <span>
            {post.likes}
          </span>

        </button>


        <button
          className="action-btn delete-btn"
          onClick={deletePost}
          type="button"
        >
          Delete
        </button>

      </div>

    </article>

  );

}