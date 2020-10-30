import { createStore } from "redux";

function postsReducer(state = [], action) {
  console.log("State--", state);

  console.log("Pinging from PostsReducer", action);
  if (action.type == "CREATE_POST") {
    console.log("State--", state);
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(postsReducer); // {}
export default store;

// Representation
const obj = {
  posts: ["", "", "", ""],
};
