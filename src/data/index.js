import { createStore } from "redux";

function postsReducer(state = [], action) {
  console.log("State--", state);

  console.log("Pinging from PostsReducer", action);
  if (action.type == "CREATE_POST") {
    console.log("State--", state);
    return [...state, action.payload];
  }
  if (action.type == "REMOVE_POST") {
    const newState = [...state];
    const index = action.payload;
    newState.splice(index, 1);
    return newState;
  }
  return state;
}

const store = createStore(postsReducer); // {}
export default store;

// Representation
const obj = {
  posts: ["", "", "", ""],
};
