import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import { UserHeaderReducer } from "./UserHeaderReducer";

export default combineReducers({
  post: PostReducer,
  users: UserHeaderReducer,
});
