import {
  FETCH_POSTS,
  ADD_POST,
  UPDATED_POST
} from "../actions/index";

const initialState = {
  posts: [],
  search: "",
  post: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case UPDATED_POST:
      return {
        ...state,
        posts: state.posts.map(e =>
          e.id === action.payload.id ? (e = action.payload) : e
        )
      };
    default:
      return state;
  }
}
