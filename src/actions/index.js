export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATED_POST = "UPDATED_POST";

export function fetchPosts(payload) {
  return { type: FETCH_POSTS, payload };
}

export function addPost(payload) {
  return { type: ADD_POST, payload };
}

export function upedPost(payload) {
  return { type: UPDATED_POST, payload };
}
