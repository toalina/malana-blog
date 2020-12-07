import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions';

class PostEdit extends React.Component {
  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  };

  handleSubmit = (event) => {                                                             
    event.preventDefault();
    const id = this.props.post.id;
    const title = this.state.title ? this.state.title : this.props.post.title;
    const text = this.state.text ? this.state.text : this.props.post.text;
    const post = {id: id, title: title, text: text}
    this.props.updatePost(post);
  };

  // In a production app you would add some code to do an API call if the user refreshes the edit page which will clear out the store, but we'll keep it simple and not do that.
  handleCancel = () => {
    this.props.history.push(`/posts/${this.props.post.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit { this.props.post.title }</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text" 
              name="title" 
              defaultValue={ this.props.post.title } 
              onChange={ this.handleChange } 
              className="form-control" 
            />
          </div>
          <div className="form-group">
            <label>Text</label>
            <textarea 
              name="text" 
              rows="5" 
              defaultValue={ this.props.post.text } 
              onChange={ this.handleChange } 
              className="form-control" 
            />
          </div>
          <div>
            <button type="submit" className="btn btn-outline-primary">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-outline-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ post: state.post });

const mapDispatchToProps = { updatePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);