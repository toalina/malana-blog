import actionTypes from '../actions/actionTypes';                           

const initialState = { 
  posts: [] 
}

export default function allPostsReducer(state = initialState, action) {  
  switch (action.type) {
    case actionTypes.RECEIVE_POSTS: // sort by decreasing id
      return action.posts.sort((a, b) => (a.id < b.id) ? 1 : -1)

    case actionTypes.RECEIVE_MORE_POSTS: 
      return [action.posts, ...state];

    case actionTypes.ADD_POST: 
      return [action.payload, ...state];

    case actionTypes.REMOVE_POST: // remove a single post by filter on array
      return state.filter(post => post.id !== action.payload.id); 

    case actionTypes.REMOVE_ALL_POSTS:
      return state

    case actionTypes.REPLACE_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            text: action.payload.text,
          }
        } else return post;
      })
      
    default:                                                             
      return state;
  }
}