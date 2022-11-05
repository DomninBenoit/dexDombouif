const Pokemon = require("../models/Pokemon");

exports.getAllPokemons = (req, res, next) => {
  Pokemon.find()
    .then((pokemons) => {
      console.log(pokemons.length);
      res.status(200).json(pokemons);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.putPokemon = (req, res, next) => {
  const pokemon = new Pokemon({
    id: req.body.id,
    ball: req.body.ball,
    chroma: req.body.chroma,
    method: req.body.method,
  });
  Pokemon.updateOne({ id: req.body.id }, pokemon)
    .then(() => {
      res.status(201).json(pokemon);
    })
    .catch((error) => res.status(400).json({ error }));
};
