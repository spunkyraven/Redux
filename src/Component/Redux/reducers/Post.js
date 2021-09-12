import { ADD_POST, CHECK_POST, DELETE_POST, EDIT_POST } from "../constant/Post";

const initialstate = {
  posts: [
    {
      id: Math.random(),
      title: "first post",
      done: false,
    },
  ],
};
const postReducers = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((el) => el.id !== action.payload),
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((el) =>
          el.id === action.payload.id
            ? { ...el, title: action.payload.title }
            : el
        ),
      };
    case CHECK_POST:
      return {
        ...state,
        posts: state.posts.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        ),
      };
    default:
      return state;
  }
};
export default postReducers;
