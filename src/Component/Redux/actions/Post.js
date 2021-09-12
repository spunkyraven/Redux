import { ADD_POST, DELETE_POST, EDIT_POST, CHECK_POST } from "../constant/Post";

export const add_Post = (newPost) => {
  return {
    type: ADD_POST,
    payload: newPost,
  };
};
export const delete_Post = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};
export const edit_Post = (id, title, done) => {
  return {
    type: EDIT_POST,
    payload: { id, title, done },
  };
};
export const check_Post = (id) => {
  return {
    type: CHECK_POST,
    payload: id,
  };
};
