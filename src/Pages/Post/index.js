import React, { useEffect, useState } from "react";
import store from "../../data";

const Post = (props) => {
  let subscription;
  const indexOfPost = props.match.params.postIndex;
  const [post, setPost] = useState({ id: "", text: "", comments: [] });
  const [comment, setComment] = useState("");
  useEffect(() => {
    const state = store.getState();
    console.log("State*****", state);
    if (state[indexOfPost] != undefined) {
      setPost(state[indexOfPost]);
    }
    subscription = store.subscribe(() => {
      console.log("State updated...", store.getState());
      const state = store.getState();
      if (state[indexOfPost] != undefined) {
        console.log("*******67676", state[indexOfPost]);
        const newPost = {
          ...state[indexOfPost],
        };
        setPost(newPost);
      }
    });
    return () => {
      subscription();
    };
  }, []);
  return (
    <div>
      <h1>{post.text}</h1>
      <textarea
        onKeyUp={(event) => {
          const { value } = event.currentTarget;
          const { keyCode } = event;
          console.log("KeyCode", keyCode);
          if (keyCode === 13) {
            store.dispatch({
              type: "ADD_COMMENT",
              payload: {
                postId: post.id,
                comment: value,
              },
            });
          } else {
            setComment(value);
          }
        }}
      />
      <ol>
        {post.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ol>
    </div>
  );
};

export default Post;
