import React, { useEffect, useState } from "react";
import store from "../../data";

const Post = (props) => {
  const indexOfPost = props.match.params.postIndex;
  const [post, setPost] = useState("");
  useEffect(() => {
    const state = store.getState();
    console.log("State*****", state);
    setPost(state[indexOfPost]);
  });
  return <h1>{post}</h1>;
};

export default Post;
