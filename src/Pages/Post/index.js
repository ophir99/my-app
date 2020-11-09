import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Post = (props) => {
  const indexOfPost = props.match.params.postIndex;
  const post = useSelector((state) => {
    return state.posts[indexOfPost];
  });
  const comments = useSelector((state) => {
    const newComments = state.comments.filter(
      (comment) => comment.belongsTo === post.id
    );
    return newComments.map((comment) => {
      return {
        ...comment,
        likes: 0,
        dislikes: 0,
      };
    });
  });
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  return (
    <div>
      <h1>{post.text}</h1>
      <p>{post.id}</p>
      <textarea
        onKeyUp={(event) => {
          const { value } = event.currentTarget;
          const { keyCode } = event;
          console.log("KeyCode", keyCode);
          if (keyCode === 13) {
            dispatch({
              type: "ADD_COMMENT",
              payload: {
                belongsTo: post.id,
                text: comment,
              },
            });
          } else {
            setComment(value);
          }
        }}
      />
      <ol>
        {comments.map((comment, index) => (
          <li key={index}>
            <h2>{comment.text}</h2>
            <p>Belongs to: {comment.belongsTo}</p>
            <p>Id: {comment.id}</p>
            <button>{comment.likes}</button>
            <button>{comment.dislikes}</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Post;
