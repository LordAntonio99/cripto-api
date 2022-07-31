const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/:id", async (req, res) => {
  const currency = req.params.id;
  try {
    const response = await axios.get(
      `https://coinmarketcap.com/currencies/${currency}/`
    );
    const html = response.data;
    var $ = cheerio.load(html);
    const price = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > div > span"
    )
      .text()
      .replace(",", "");
    const priceChange24h = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td > span"
    ).text();
    const tradingVolume24h = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td > span"
    )
      .text()
      .replaceAll(",", "");
    const low24h = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(3) > td > div:nth-child(1)"
    )
      .text()
      .replace("/", "")
      .replace(" ", "")
      .replaceAll(",", "");
    const high24h = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(3) > td > div:nth-child(2)"
    )
      .text()
      .replaceAll(",", "");
    const marketPercent = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td > span"
    ).text();
    const marketPosition = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td"
    )
      .text()
      .replace("#", "");
    // let markets = [] 
    // $(
    //   "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div:nth-child(2) > div.sc-10p9viq-3.jfTMrS > div > table > tbody"
    // ).each((i, e) => {
    //     $(this).find("td").each((i,e) => {
    //         markets.push($(this).text().trim())
    //     })
    // })
    // console.log(markets);
    const data = {
      price,
      priceChange24h,
      tradingVolume24h,
      low24h,
      high24h,
      marketPercent,
      marketPosition,
    //   markets,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
