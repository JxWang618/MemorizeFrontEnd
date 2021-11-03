import { combineReducers } from 'redux';
import posts from './posts';

export default combineReducers({
    posts, //if key value is same , we can only keep the first one 
});