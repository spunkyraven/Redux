import { combineReducers } from 'redux';
import postReducers from "./Post";
const rootReducers =combineReducers({postReducers});
export default rootReducers;