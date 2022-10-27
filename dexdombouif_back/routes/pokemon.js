const express = require("express");
const router = express.Router();

const pokemonCtrl = require("../controllers/pokemon");

router.get("/", pokemonCtrl.getAllPokemons);

module.exports = router;
