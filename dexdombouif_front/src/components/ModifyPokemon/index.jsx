import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePokemon } from "../../redux/actions";
import Input from "../Input";
import { putPokemon, getOnePokemon } from "../../services/services";
import "./style.scss";

const Pokemon = (pokemons) => {
  const [displayPokemon, setDisplayPokemon] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event, id) => {
    console.log(event.target["image"].value);
    const pokemon = {
      ball: event.target["ball"].value,
      chroma: event.target["chroma"].value,
      method: event.target["method"].value,
      sex: event.target["sex"].value,
      score: event.target["score"].value,
      game: event.target["game"].value,
      date: event.target["date"].value,
      type1: event.target["type1"].value,
      type2: event.target["type2"].value,
      image: event.target["image"].value,
    };

    putPokemon(id, pokemon)
      .then(() => {
        getOnePokemon(id)
          .then((response) => {
            dispatch(updatePokemon(id, response));
          })
          .catch((error) => {
            alert(error);
          });
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
    <>
      {displayPokemon === false ? (
        <div className="cadre">
          <div className="card">
            <p className="identity">
              {pokemons.pokemon.id} {pokemons.pokemon.name}{" "}
            </p>
            <img src={pokemons.pokemon.image} />
            <p>
              {pokemons.pokemon.ball}
              {pokemons.pokemon.chroma}
              {pokemons.pokemon.method}
            </p>
            <div className="buttons">
              <button
                className="editButton"
                type="button"
                onClick={openModifyPokemon}
              >
                modify
              </button>
              <button className="editButton" type="button">
                supprimer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form
          className="formModifyPokemon"
          onSubmit={(event) => handleSubmit(event, pokemons.pokemon._id)}
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
            <Input
              type="text"
              name="sex"
              classname="input-profile"
              placeholder="sexe"
            />
            <Input
              type="text"
              name="score"
              classname="input-profile"
              placeholder="score"
            />
            <Input
              type="text"
              name="game"
              classname="input-profile"
              placeholder="jeu"
            />
            <Input
              type="text"
              name="date"
              classname="input-profile"
              placeholder="date"
            />
            <Input
              type="text"
              name="type1"
              classname="input-profile"
              placeholder="type1"
            />
            <Input
              type="text"
              name="type2"
              classname="input-profile"
              placeholder="type2"
            />
            <Input
              type="file"
              name="image"
              classname="input-profile"
              placeholder="Choisissez votre image"
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
      )}
    </>
  );
};

export default Pokemon;
