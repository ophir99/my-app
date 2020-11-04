import { createStore } from "redux";
import { v4 as createUniqueId } from "uuid";

function postsReducer(state = [], action) {
  const { type, payload } = action;
  console.log("ACTION", action);
  if (type == "CREATE_POST") {
    console.log("State--", state);
    const id = createUniqueId();
    console.log("Id is", id);
    const obj = {
      id,
      text: payload,
      comments: [],
    };
    return [...state, obj];
  }
  if (type == "REMOVE_POST") {
    const newState = [...state];
    const index = action.payload;
    newState.splice(index, 1);
    return newState;
  }
  if (type == "ADD_COMMENT") {
    const tempState = [...state];
    for (let i = 0; i < tempState.length; i++) {
      if (tempState[i].id === action.payload.postId) {
        tempState[i].comments.push(action.payload.comment);
      }
    }
    return tempState;
  }
  return state;
}

const store = createStore(postsReducer); // {}
export default store;

// Representation
const obj = {
  posts: ["", "", "", ""],
};
