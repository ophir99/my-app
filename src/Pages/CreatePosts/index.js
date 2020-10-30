import React, { useState, useEffect } from "react";

import store from "../../data";
console.log("Store", store.getState());
const CreatePosts = () => {
  const [post, setPost] = useState("Hi");
  const [posts, setPosts] = useState(store.getState());
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
      type: "",
      payload: post,
    });
    const posts_ = store.getState();
    console.log("POSTS", posts_);
    setPosts(posts_);
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
                defaultValue={post}
                placeholder="Whats in your mind??"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={submitHandler}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        {posts.map((post, index) => {
          return <li key={index}>{post}</li>;
        })}
      </ul>
    </div>
  );
};

export default CreatePosts;
