import React, { Component } from "react";

class ListPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }
  componentDidMount() {
    console.log("Mounted");
    this.setState({ x: 1 });
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  render() {
    return (
      <div>
        <h1>Welcome to ListPosts!!! {this.state.x}</h1>
      </div>
    );
  }
}

export default ListPosts;
