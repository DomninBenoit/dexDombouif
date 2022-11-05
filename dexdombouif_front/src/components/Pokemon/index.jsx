import React from "react";
import Input from "../../components/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePokemon } from "../../redux/actions";
import { getPokemon } from "../../redux/selectors";
import { putPokemon } from "../../services/services";

const Pokemon = () => {
  const pokemons = useSelector(getPokemon);
  const [displayPokemon, setDisplayPokemon] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event, id) => {
    console.log(event);
    const pokemon = {
      ball: event.target["ball"].value,
      chroma: event.target["chroma"].value,
      method: event.target["method"].value,
    };
    putPokemon(id, pokemon)
      .then((response) => {
        console.log(response);
        dispatch(updatePokemon(id, response));
      })
      .catch((error) => {
        alert(error);
      });
    closeModifyPokemon();
  };

  const openModifyPokemon = () => {
    setDisplayPokemon(true);
  };

  const closeModifyPokemon = () => {
    setDisplayPokemon(false);
  };

  return (
    <div>
      {pokemons.map((pokemon) =>
        pokemon.id < 3 ? (
          displayPokemon === false ? (
            <div>
              <p>
                {pokemon.id} {pokemon.name} {pokemon.ball} {pokemon.chroma}
                {pokemon.method}
              </p>
              <button
                className="editButton"
                type="button"
                onClick={openModifyPokemon}
              >
                modify
              </button>
            </div>
          ) : (
            <form
              className="formModifyPokemon"
              onSubmit={(event) => handleSubmit(event, pokemon.id)}
            >
              <div className="listInput">
                <Input
                  type="text"
                  name="ball"
                  classname="input-profile"
                  placeholder="ball"
                />
                <Input
                  type="text"
                  name="chroma"
                  classname="input-profile"
                  placeholder="chroma"
                />
                <Input
                  type="text"
                  name="method"
                  classname="input-profile"
                  placeholder="méthode"
                />
              </div>
              <div className="list-button-update">
                <button className="buttonModifyPokemon" type="submit">
                  Save
                </button>
                <button
                  className="buttonModifyPokemon"
                  onClick={closeModifyPokemon}
                >
                  Cancel
                </button>
              </div>
            </form>
          )
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Pokemon;
