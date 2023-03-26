import { combineReducers } from "redux";
import userReducer from "./user";
import partnerReducer from "./partner";

const rootReducer = combineReducers({ userReducer, partnerReducer });

export default rootReducer;
