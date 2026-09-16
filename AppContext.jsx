import { createContext, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = "richfield_connect_state";
const AppContext = createContext(null);

const defaultPosts = [
  {
    id: "welcome-1",
    username: "Richfield Community",
    timestamp: new Date().toISOString(),
    content: "Welcome to Richfield Connect! Share your academic wins, questions, and study ideas with your peers.",
    likes: 12,
    liked: false
  },
  {
    id: "welcome-2",
    username: "Campus Mentor",
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    content: "A strong study routine beats last-minute cramming. Build one, stick to it, and keep your notes organized.",
    likes: 9,
    liked: true
  }
];

function getInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return { user: null, posts: defaultPosts };
    }

    const saved = JSON.parse(raw);

    return {
      user: saved.user ?? null,
      posts: Array.isArray(saved.posts) && saved.posts.length ? saved.posts : defaultPosts
    };
  } catch {
    return { user: null, posts: defaultPosts };
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, user: action.payload };
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "TOGGLE_LIKE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? {
                ...post,
                liked: !post.liked,
                likes: post.likes + (post.liked ? -1 : 1)
              }
            : post
        )
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}
