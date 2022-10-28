const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

const pokemonRoutes = require("./routes/pokemon");

const mongoDB = "mongodb+srv:";
mongoose
  .connect(
<<<<<<< HEAD
    mongoDB,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
=======
    "mongodb+srv:",
    { useNewUrlParser: true, useUnifiedTopology: true }
>>>>>>> 61229c8d994001a2e310e61ebc1c9fcc4a10ab02
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/pokemon", pokemonRoutes);

module.exports = app;
