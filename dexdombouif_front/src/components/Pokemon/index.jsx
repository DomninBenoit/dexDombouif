import React from "react";
import { useSelector } from "react-redux";
import { getPokemon } from "../../redux/selectors";
import ModifyPokemon from "../ModifyPokemon";
import "./style.scss";

const Pokemon = () => {
  const pokemons = useSelector(getPokemon);

  return (
    <div className="cardPokemon">
      {pokemons.map((pokemon) =>
        pokemon.id < 3 ? <ModifyPokemon pokemon={pokemon} /> : <></>
      )}
    </div>
  );
};

export default Pokemon;
