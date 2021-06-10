import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/appReducer";

import Api from "../lib/Api/Api";
import initialState from "./initialState";

const createStoreWithMiddleware = applyMiddleware(
  thunk.withExtraArgument({ Api })
)(createStore);

export default createStoreWithMiddleware(reducer, initialState);
