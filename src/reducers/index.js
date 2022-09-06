import { combineReducers } from "redux";
import items from "./items";
const rootReducer = combineReducers({
    items
});

export default rootReducer;

// combine reduncer combines the state for all of the reducers
