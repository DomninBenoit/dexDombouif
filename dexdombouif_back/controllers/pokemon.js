const Pokemon = require("../models/Pokemon");

exports.createPokemon = (req, res, next) => {
  const pokemonObject = JSON.parse(req.body.pokemon);
  delete pokemonObject._id;
  const pokemon = new Pokemon({
    ...pokemonObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  pokemon
    .save()
    .then(() => {
      res.status(201).json({ message: "Nouveau pokémon enregistré" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getAllPokemons = (req, res, next) => {
  Pokemon.find()
    .then((pokemons) => {
      res.status(200).json(pokemons);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePokemon = (req, res, next) => {
  Pokemon.findOne({ _id: req.params.id })
    .then((pokemon) => {
      res.status(200).json(pokemon);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.putPokemon = (req, res, next) => {
  console.log("CONTENU PUT : req.file");
  console.log(req.body);
  console.log(req.file);
  const pokemonObject = req.file
    ? {
        ...req.body.Pokemon,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Pokemon.findOne({ _id: req.params.id }).then(() => {
    Pokemon.updateOne(
      { _id: req.params.id },
      {
        ...pokemonObject,
        _id: req.params.id,
      }
    )
      .then(() => {
        res.status(201).json({ message: "update pokemon success" });
      })
      .catch((error) => res.status(400).json({ error }));
  });
};

exports.deletePokemon = (req, res, next) => {
  Pokemon.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "pokemon deleted" });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};
