const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const pokemonCtrl = require("../controllers/pokemon");

router.post("/", multer, pokemonCtrl.createPokemon);
router.get("/", pokemonCtrl.getAllPokemons);
router.get("/:id", pokemonCtrl.getOnePokemon);
router.put("/:id", multer, pokemonCtrl.putPokemon);
router.delete("/:id", pokemonCtrl.putPokemon);

module.exports = router;
