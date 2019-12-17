import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmitPost.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitPost(e) {
    e.preventDefault();
    const bodyForm = {
      title: this.state.title,
      body: this.state.body
    };

    //call action
    this.props.createPost(bodyForm);
  }
  render() {
    return (
      <div>
        <h3>Add Form</h3>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title:</label>
              <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <br />
            <div>
              <label>Body:</label>
              <br />
              <textarea
                name="body"
                onChange={this.onChange}
                value={this.state.body}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
