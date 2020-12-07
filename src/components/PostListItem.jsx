import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, date, text }) => {
  return (
      <div className='blog-post' key={ id }>
        <hr/>          
        <h2 className='blog-post-title'>
          <Link to={`/blog/${id}`} className='text-info'>
            {id}: { title }
          </Link>
        </h2>
        <p className='blog-post-meta'>{ date }</p>
        <p>{ text }</p>
      </div>
  );
};

export default PostListItem;