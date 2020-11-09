import { createStore, combineReducers } from "redux";
import { v4 as createUniqueId } from "uuid";

function postsReducer(state = [], action) {
  const { type, payload } = action;
  console.log("ACTION", action);
  if (type == "CREATE_POST") {
    const id = createUniqueId();
    console.log("Id is", id);
    const obj = {
      id,
      text: payload,
    };
    return [...state, obj];
  }
  if (type == "REMOVE_POST") {
    const newState = [...state];
    const index = action.payload;
    newState.splice(index, 1);
    return newState;
  }
  return state;
}

function commentsReducer(state = [], action) {
  const { type } = action;
  console.log("ACTION", action);
  if (type == "ADD_COMMENT") {
    const newComment = {
      id: `comment-${createUniqueId()}`,
      ...action.payload,
    };
    const tempState = [...state, newComment];
    return tempState;
  }
  return state;
}

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  userDetails: function (state = {}, action) {
    return state;
  },
});

const store = createStore(rootReducer); // {}
export default store;

// Representation
const obj = {
  posts: ["", "", "", ""],
};
