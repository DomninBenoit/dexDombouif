const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  sex: { type: String, required: false },
  method: { type: String, required: false },
  score: { type: Number, required: false },
  game: { type: String, required: false },
  chroma: { type: String, required: false },
  date: { type: String, required: false },
  gen: { type: String, required: false },
  type: { type: String, required: false },
  ball: { type: String, required: false },
  leg: { type: String, required: false },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
