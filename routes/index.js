const router = require("express").Router();
const monedas = require("../data/monedas.json");

router.get("/", (req, res) => {
    const data = {
        "Available currencies": monedas
    }
  res.status(200).json(data);
});

module.exports = router;
