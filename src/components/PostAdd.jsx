import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';                      

class PostAdd extends React.Component {
  state = { 
    title: '', 
    text: '' 
  };

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPost(this.state);                                
  };

  render() {
    return (
      <div>
        <h4>Add New Post</h4>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input 
              type="text" 
              name="title" 
              required 
              value={ this.state.title } 
              onChange={this.handleChange} 
              className="form-control" 
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <textarea 
              name="text" 
              rows="5" 
              required 
              value={ this.state.text } 
              onChange={ this.handleChange } 
              className="form-control" 
              placeholder="Content" 
            />
          </div>
          <button type="submit" className="btn btn-info text-white">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addPost };                     

export default connect(null, mapDispatchToProps)(PostAdd);  