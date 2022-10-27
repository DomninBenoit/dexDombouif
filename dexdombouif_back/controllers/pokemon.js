const Pokemon = require("../models/Pokemon");

exports.getAllPokemons = (req, res, next) => {
  Pokemon.find()
    .then((pokemons) => {
      console.log(pokemons.length);
      res.status(200).json(pokemons);
    })
    .catch((error) => res.status(400).json({ error }));
};
