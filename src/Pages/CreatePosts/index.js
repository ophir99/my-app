import React, { useState, useEffect } from "react";

import store from "../../data";
console.log("Store", store.getState());
const CreatePosts = () => {
  const [post, setPost] = useState("Hi");
  const [posts, setPosts] = useState(store.getState());
  store.subscribe(() => {
    console.log("State updated---logging from subscribe");
    setPosts(store.getState());
  });
  useEffect(() => {
    console.log("Rendering....", post);
  });

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setPost(value);
  };

  const submitHandler = () => {
    // store.posts = [...posts, post];
    //Event : CREATE_POST
    store.dispatch({
      type: "CREATE_POST",
      payload: post,
    });
    setPost("");
  };

  const removePost = (index) => {
    console.log("Removing post--");
    store.dispatch({
      type: "REMOVE_POST",
      payload: index,
    });
  };
  return (
    <div>
      <h1>Welcome CreatePosts!</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <textarea
                onChange={handleChange}
                value={post}
                placeholder="Whats in your mind??"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button disabled={post.length == 0} onClick={submitHandler}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <p>{post}</p>
              <button onClick={() => removePost(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreatePosts;
