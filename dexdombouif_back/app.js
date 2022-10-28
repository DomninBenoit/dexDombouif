const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

const pokemonRoutes = require("./routes/pokemon");

const mongoDB = "mongodb+srv:";
mongoose
  .connect(
    mongoDB,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/pokemon", pokemonRoutes);

module.exports = app;
