const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

router.get("/:id", async (req, res) => {
  const currency = req.params.id;
  try {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(
      `https://coinmarketcap.com/es/currencies/${currency}/historical-data/`,
      { waitUntil: "networkidle2" }
    );
    const html = await page.content();
    var $ = cheerio.load(html);
    let array = [];
    test = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div > div.history > div.sc-1e66hdr-2.kkTWGn > table > tbody > tr"
    ).each((i, el) => {
      const info = $(el).text().split("$");
      array.push({
        date: info[0],
        open: "$" + info[1].replaceAll(",", ""),
        close: "$" + info[4].replaceAll(",", ""),
        low: "$" + info[3].replaceAll(",", ""),
        high: "$" + info[2].replaceAll(",", ""),
        volume: "$" + info[5].replaceAll(",", ""),
        totalCap: "$" + info[6].replaceAll(",", ""),
      });
    });
    res.status(200).send({
        records: array.length,
        data: array
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
