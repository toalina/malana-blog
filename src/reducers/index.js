import { combineReducers } from 'redux';
import posts from './allPostsReducer';
import post from './singlePostReducer';

export default combineReducers({
  posts: posts,
  post: post,
});