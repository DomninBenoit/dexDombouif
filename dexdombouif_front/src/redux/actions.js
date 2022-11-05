export const setPokemon = (payload) => ({
  type: "SET_POKEMON",
  payload: payload,
});

export const updatePokemon = (id, payload) => ({
  type: "UPDATE_POKEMON",
  id,
  payload,
});
