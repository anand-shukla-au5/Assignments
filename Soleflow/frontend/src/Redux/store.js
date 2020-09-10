import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import postsReducer from "./reducer"
const rootReducer = combineReducers({
    posts: postsReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store