import React, { useState, useEffect } from "react";

const CreatePosts = () => {
  const [post, setPost] = useState("Hi");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Rendering....", post);
  });

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setPost(value);
  };

  const submitHandler = () => {
    setPosts([...posts, post]);
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
