import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import PostListItem from './PostListItem';
import Aside from './Aside';

class PostList extends Component {
  render() {                    
    if(this.props.posts.length) {
      return (
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="text-center">All Posts</h3>
            {
              this.props.posts.map(post => {
                var date = moment(post.timestamp).format('LLLL');
                return (
                  <PostListItem
                    key={post.id}
                    id={post.id}
                    date={date}
                    title={post.title}
                    text={post.text}
                  />
                );
              })
            }
          </div>
          <Aside />
        </div>
      )    
    } else {
      return (
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="text-center">No Posts</h3>
            <p className="text-center text-muted">Try getting more posts</p>
          </div>
          <Aside/>
        </div> 
      )
    }
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, null)(PostList);               