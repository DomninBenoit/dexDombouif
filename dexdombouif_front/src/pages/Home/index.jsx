import React from "react";
import Pokemon from "../../components/Pokemon";
import { useDispatch } from "react-redux";
import { setPokemon } from "../../redux/actions";
import { useEffect } from "react";
import { getAllPokemons } from "../../services/services";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllPokemons()
      .then((response) => {
        console.log(response);
        dispatch(setPokemon(response));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <Pokemon />
    </div>
  );
};

export default Home;
