import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducer";

const rootReducer = combineReducers({
    product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
