import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { getMorePosts, deleteAllPosts } from '../actions';

class Header extends React.Component {
  handleDeleteAll = () => {

  }

  render() {
    return (
      <div>
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            {/* <div className="col-4 pt-1">
              
              <button 
                className="btn btn-outline-secondary"
                onClick={() => this.props.getMorePosts()}
              >
                Get More Posts
              </button>
            </div> */}
            <div className="d-flex justify-content-center">
              <a className="blog-header-logo text-dark" href="/">Alina's Blog</a>
            </div>
            {/* <div className="col-4 d-flex justify-content-end align-items-center">
              <button 
                className="btn btn-outline-danger"
                onClick={() => this.props.deleteAllPosts()}
              >
                Delete All Posts
              </button>
              <NavLink exact className="text-muted" activeClassName="active" to="/blog/new">
                Create New Post
              </NavLink>
            </div> */}
          </div>
        </header>
        <div className="py-1 mt-2 mb-3">
          <nav className="nav d-flex justify-content-between">
            <li className="nav-item">
              <button className="btn btn-outline-secondary" onClick={() => this.props.getMorePosts()}>
                Get More Posts
              </button>
            </li>
            <li className="nav-item">
              {/* <button className="btn btn-outline-secondary" activeClassName="active" to="/blog/new">
                Create New Post
              </button> */}
              <NavLink exact className="btn btn-outline-secondary" activeClassName="active" to="/blog/new">
                Create New Post
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger" onClick={() => this.props.deleteAllPosts()}>
                Delete All Posts
              </button>
            </li>
          </nav>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { getMorePosts, deleteAllPosts };

export default connect(null, mapDispatchToProps)(Header);