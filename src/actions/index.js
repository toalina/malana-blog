import axios from 'axios';
import history from '../history';                                   
import actionTypes from './actionTypes'

const API_URL = 'http://restedblog.herokuapp.com/ato/api/';

export const getPosts = () => {                                   
  return (dispatch) => {
    return axios.get(API_URL)                               
      .then(response => {
        dispatch({ 
          type: actionTypes.RECEIVE_POSTS, 
          posts: response.data
        })  
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

export const getMorePosts = () => {                                   
  return (dispatch) => {
    return axios.get(API_URL + 'generateSampleData') 
      .then(response => {
        dispatch(getPosts()) // after we call generate more data, we reload the list of blog posts
      })
      .then(() => {
        history.push('/blog') 
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

export const addPost = ({title, text}) => {
  return (dispatch) => {
    // We create new post by sending object with title and text
    return axios.post(API_URL, {title, text}) 
      .then(response => {
        let data = response.data;
        dispatch({
          type: actionTypes.ADD_POST,
          // and we get response with new id generated for new post
          payload: {
            id: data.id, 
            title: data.title, 
            text: data.text
          }
        })  
      })
      .then(() => {
        history.push('/blog') 
      })
      .catch(error => { 
        throw(error) 
      });
  };
}

export const getPost = (id) => {
  return (dispatch) => {
    return axios.get(API_URL + id)
      .then(response => {
        dispatch({
          type: actionTypes.RECEIVE_POST, 
          post: response.data
        });
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.delete(API_URL + id)
      .then(response => {
        dispatch({
          type: actionTypes.REMOVE_POST, 
          payload: {id}
        })
      })
      .then(() => {
        history.push('/blog')
      })
      .catch(error => {
        throw(error);
      });
  }
}

export const deleteAllPosts = () => {
  alert('Are you super duper sure???') // TODO: Actually add a check, give user option to cancel
  return (dispatch) => {
    return axios.delete(API_URL)
      .then(response => {
        dispatch(getPosts()) // After delete all, we load all blog posts again (posts.length === 0)
      })
      .then(() => {
        history.push('/blog')
      })
      .catch(error => {
        throw(error);
      });
  }
}

// Weird this is not a PUT / PATCH but is a POST request to update but ok
export const updatePost = (post) => {
  const postId = post.id;
  return (dispatch) => {
    console.log(postId)
    return axios.post(API_URL + postId, {title: post.title, text: post.text})
      .then(response => {
        const data = response.data;
        // we update the individual blog post entry
        dispatch({
          type: actionTypes.UPDATE_POST, 
          payload: {
            id: data.id, 
            title: data.title, 
            text: data.text
          }
        })
        // then we update the item in the list of blog posts
        dispatch({
          type: actionTypes.REPLACE_POST, 
          payload: {
            id: data.id, 
            title: data.title, 
            text: data.text
          }
        })
      })
      .then(() => {
        history.push(`/blog/${postId}`)
      })
      .catch(error => { 
        throw(error) 
      });
  };
};


