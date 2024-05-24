require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

const MODE = process.env.MODE;

app.get("/", (req, res) => {
  res.send(`<h1>Hello World from mode: ${MODE}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
