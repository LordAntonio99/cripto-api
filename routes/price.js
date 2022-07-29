const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/:id", async (req, res) => {
  const currency = req.params.id;
  try {
    const response = await axios.get(
      `https://coinmarketcap.com/es/currencies/${currency.toLowerCase()}/`
    );
    const html = response.data;
    var $ = cheerio.load(html);
    const price = $(".priceValue").text();
    price_USD = price.slice(1).replace(",", "");
    const usd_euro = await axios.get("https://wise.com/es/currency-converter/usd-to-eur-rate")
    var $ = cheerio.load(usd_euro.data);
    const usd_euro_rate = $(".text-success").first().text();
    const data = {
        "price_USD": price_USD,
        "price_EUR": Number(Number(usd_euro_rate.replace(",", ".")) * Number(price_USD)).toFixed(2)
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
