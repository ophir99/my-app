import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const CreatePosts = () => {
  const [post, setPost] = useState("Hi");
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    console.log("State from useSelector", state);
    return state.posts;
  });

  useEffect(() => {
    // store.dispatch({
    //   type: "CREATE_POST",
    //   payload: "This is javascript",
    // });
  }, []);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setPost(value);
  };

  const submitHandler = () => {
    //Event : CREATE_POST
    dispatch({
      type: "CREATE_POST",
      payload: post,
    });
    setPost("");
  };

  const removePost = (index) => {
    console.log("Removing post--");
    dispatch({
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
              <p>{JSON.stringify(post)}</p>
              <button onClick={() => removePost(index)}>X</button>
              <NavLink to={`/viewpost/${index}`}>
                <button>View More</button>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreatePosts;
