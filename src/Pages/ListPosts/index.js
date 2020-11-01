import React, { Component } from "react";
import store from "../../data";
class ListPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      posts: [],
    };
  }
  componentDidMount() {
    console.log("Mounted");
    const posts = store.getState();
    this.setState({ x: 1, posts });
  }

  componentDidUpdate() {
    console.log("Updated");
  }
  render() {
    return (
      <div>
        <h1>Welcome to ListPosts!!!</h1>
        <p>There are -no. {this.state.posts.length} of posts</p>
        <ul>
          {this.state.posts.map((post, index) => {
            return <li key={index}>{post}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListPosts;
