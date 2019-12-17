import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h3>Posts</h3>
        {postItems}
      </div>
    );
  }
}
