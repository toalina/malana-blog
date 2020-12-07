import actionTypes from '../actions/actionTypes';

export default function singlePostReducer(state = {}, action) {  
  switch (action.type) {
    case actionTypes.RECEIVE_POST:                                     
      return action.post;

    case actionTypes.UPDATE_POST:
      return {
        id: action.id,
        title: action.payload.title,
        text: action.payload.text,
      }
      
    default:
      return state;
  }
}