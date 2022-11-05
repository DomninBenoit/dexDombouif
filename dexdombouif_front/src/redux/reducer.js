import { createStore } from "redux";
import produce from "immer";

const initialState = {
  pokemons: [],
};

function reducer(state = initialState, action) {
  if (action.type === "SET_POKEMON") {
    return produce(state, (draft) => {
      draft.pokemons = action.payload;
    });
  }
  if (action.type === "UPDATE_POKEMON") {
    return produce(state, (draft) => {
      const index = draft.pokemons.findIndex(
        (pokemon) => pokemon.id === action.id
      );
      draft.pokemons[index] = {
        ...draft.pokemons[index],
        ...action.payload,
      };
    });
  }
  return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
