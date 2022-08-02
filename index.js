const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

// Rutas
const inicio = require("./routes/index.js");
const price = require("./routes/price.js");
const info = require("./routes/info.js");
const historic = require("./routes/historic.js");

app.use(express.json());

app.use("/", inicio);
app.use("/price", price);
app.use("/info", info);
app.use("/historic", historic);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
