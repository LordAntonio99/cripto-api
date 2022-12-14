const router = require("express").Router();

router.get("/", (req, res) => {
    const data = {
        "API ROUTES": {
            "/": "This webpage",
            "/price/:coin_name": "Get the price of a cryptocurrency in USD and EUR",
            "/info/:coin_name": "Get some info about a cryptocurrency",
            "/historic/:coin_name": "Get the historic of a cryptocurrency",
        }
    }
  res.status(200).json(data);
});

module.exports = router;
