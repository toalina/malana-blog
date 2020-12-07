import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../actions';

class PostDetail extends Component {
  componentDidMount() {                                                         
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const post = this.props.post;
    if(post) {                       
      return (
        <div>
          <h2>{post.id}: {post.title}</h2>
          <p>{post.text}</p>
          <div>
            <Link 
              to={{ 
                pathname: `/blog/${post.id}/edit`, 
                state: { post: post }}
              } 
              className='btn btn-info'>
              Edit
            </Link>
            <button className="btn btn-danger" type="button" onClick={() => this.props.deletePost(post.id)}>          
              Delete
            </button>
            <Link to="/blog" className="btn btn-outline-secondary">Close</Link>                                                 
          </div>
          <hr/>
        </div>
      )
    } else {
      return (
        <div className='text-center'>Oops! Maybe try <Link to='/blog/new' className='text-muted'>writing something new</Link>
          
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({ post: state.post });                 

const mapDispatchToProps = { getPost, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);