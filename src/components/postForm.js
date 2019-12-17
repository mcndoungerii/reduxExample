import React, { Component } from "react";

export default class postForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h3>Add Form</h3>
        <div>
          <form>
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
              <button type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
