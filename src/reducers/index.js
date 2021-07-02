import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { usersReducer } from "./usersReducer";
import { findCommentReducers } from "./commentsRedcers";
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  commentsPost: findCommentReducers,
});
