import { createStore } from "redux";
import produce from "immer";

const initialState = [];

function reducer(state = initialState, action) {
  if (action.type === "SET_POKEMON") {
    return produce(state, (draft) => {
      draft = action.payload;
    });
  }
  return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
