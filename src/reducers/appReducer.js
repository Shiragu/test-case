import { combineReducers } from "redux";

import postsReducer from "./posts/postReducer";

// применение редюсера для всего нашего приложения

export default combineReducers({
  posts: postsReducer,
});
