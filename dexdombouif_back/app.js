const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

const mongoose = require("mongoose");

const pokemonRoutes = require("./routes/pokemon");

const mongoDB =
  "mongodb+srv://root:root@cluster0.fezpes2.mongodb.net/?retryWrites=true&w=majority";
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
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
