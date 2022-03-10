"use-strict";

const express = require("express");
const coinRanking = express.Router();
const axios = require("axios");
require("dotenv").config();

const COIN_RANKING_API_KEY = process.env.COIN_RANKING_API_KEY;
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const BASE_URL = `https://api.coinranking.com/v2`;
const BASE_URL1 = "https://coinpaprika1.p.rapidapi.com";

const fetchCoins = async (req, res) => {
  console.log("Fetch Coins");
  try {
    const coinsResult = await axios.get(
      `${BASE_URL}/coins?limit=${req.query.limit}`
    );
    res.send(coinsResult.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const fetchCoinDetails = async (req, res) => {
  console.log("Fetch Coin Details");
  try {
    const coinDetailsResult = await axios.get(
      `${BASE_URL}/coin/${req.query.coinID}`
    );
    res.send(coinDetailsResult.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const fetchCoinHistory = async (req, res) => {
  console.log("Fetch Coin History");
  try {
    const coinHistoryResult = await axios.get(
      `${BASE_URL}/coin/${req.query.coinID}/history?timePeriod=${req.query.timeperiod}`
    );
    res.send(coinHistoryResult.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};


coinRanking.get("/fetchCoins", fetchCoins);
coinRanking.get("/fetchCoinDetails", fetchCoinDetails);
coinRanking.get("/fetchCoinHistory", fetchCoinHistory);
module.exports = coinRanking;
