const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/:id", async (req, res) => {
  const currency = req.params.id;
  try {
    // Datos generales

    var response = await axios.get(
      `https://coinmarketcap.com/currencies/${currency}/`
    );
    var html = response.data;
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
    const low7d = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(1) > td > div:nth-child(1)"
    )
      .text()
      .replace("/", "")
      .replace(" ", "")
      .replaceAll(",", "");
    const high7d = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(1) > td > div:nth-child(2)"
    )
      .text()
      .replaceAll(",", "");
    const low30d = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(2) > td > div:nth-child(1)"
    )
      .text()
      .replace("/", "")
      .replace(" ", "")
      .replaceAll(",", "");
    const high30d = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(2) > td > div:nth-child(2)"
    )
      .text()
      .replaceAll(",", "");
    const low90d = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(3) > td > div:nth-child(1)"
    )
      .text()
      .replace("/", "")
      .replace(" ", "")
      .replaceAll(",", "");
    const high90d = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(3) > td > div:nth-child(2)"
    )
      .text()
      .replaceAll(",", "");
    const low1yr = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(4) > td > div:nth-child(1)"
    )
      .text()
      .replace("/", "")
      .replace(" ", "")
      .replaceAll(",", "");
    const high1yr = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(4) > td > div:nth-child(2)"
    )
      .text()
      .replaceAll(",", "");
    const allTimeHigh = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(5) > td > span"
    )
      .text()
      .replaceAll(",", "");
    const allTimeLow = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(6) > td > span"
    )
      .text()
      .replaceAll(",", "");
    const marketPercent = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td > span"
    ).text();
    const coinROI = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(2) > table > tbody > tr:nth-child(7) > td > div "
    ).text();
    const marketPosition = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td"
    )
      .text()
      .replace("#", "");
    const totalCoinSupply = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div > div.sc-16r8icm-0.sc-19zk94m-1.gRSJaB > div:nth-child(3) > div > div.sc-16r8icm-0.hgKnTV > section > div > div.sc-16r8icm-0.kjciSH.hide > div:nth-child(3) > table > tbody > tr:nth-child(1) > td"
    )
      .text()
      .split(" ")[0]
      .replaceAll(",", "");

    // Datos de mercados
    response = await axios.get(
      `https://coinmarketcap.com/currencies/${currency}/markets/`
    );
    html = response.data;
    $ = cheerio.load(html);
    const coinName = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > h1"
    ).text().split(" ")[0]
    const coinSymbol = $(
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kDzKwW.nameSection > div.sc-16r8icm-0.gpRPnR.nameHeader > h2 > small"
    ).text();

    const test = $("#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.jKrmxw.container > div:nth-child(2) > div.sc-10p9viq-3.jfTMrS > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > p").text()
    console.log(test)
    const data = {
      coinName,
      coinSymbol,
      price,
      priceChange24h,
      tradingVolume24h,
      low24h,
      high24h,
      low7d,
      high7d,
      low30d,
      high30d,
      low90d,
      high90d,
      low1yr,
      high1yr,
      allTimeHigh,
      allTimeLow,
      coinROI,
      marketPercent,
      marketPosition,
      totalCoinSupply,
      //   markets,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
