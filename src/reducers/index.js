import { combineReducers } from "redux";
import items from "./items";
import categories from "./categories";
const rootReducer = combineReducers({
    items,
    categories
});

export default rootReducer;

// combine reduncer combines the state for all of the reducers
