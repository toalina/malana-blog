import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Aside extends Component {
  render() {
    // TODO: Clean up logic in here
    if (this.props.posts.length) {
      return (
        <aside className="col-md-4 blog-sidebar">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              {
                this.props.posts.map(post => {
                  return (
                    <li key={post.id}>
                      <Link to={`/posts/${post.id}`} className='text-info d-inline-block text-truncate archive-link'>{post.title}</Link>
                    </li>
                  );
                })
              }
            </ol>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li><a href="/">Salesforce</a></li>
              <li><a href="/">Lightning UI</a></li>
              <li><a href="/">ReactJS</a></li>
            </ol>
          </div>
        </aside>  
      );
    } else { // if we have no posts, load this instead
      return (
        <aside className="col-md-4 blog-sidebar">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li><a href="/">Salesforce</a></li>
              <li><a href="/">Lightning UI</a></li>
              <li><a href="/">ReactJS</a></li>
            </ol>
          </div>
        </aside> 
      )
    }
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, null)(Aside);    