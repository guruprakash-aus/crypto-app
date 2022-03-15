"use-strict";

const express = require("express");
const rapidApi = express.Router();
const axios = require("axios");
require("dotenv").config();

const RAPID_API_KEY = process.env.RAPID_API_KEY;
const BASE_URL = "https://bing-news-search1.p.rapidapi.com";

const fetchNews = async (req, res) => {
  console.log("Fetch News");
  console.log(req.query.newsCategory);
  console.log(req.query.count);
  try {
    const newsResult = await axios.get(
      `${BASE_URL}/news/search?q=${req.query.newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${req.query.count}`,
      {
        headers: {
          "x-rapidapi-key": RAPID_API_KEY,
        },
      }
    );
    res.send(newsResult.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

rapidApi.get("/fetchNews", fetchNews);
module.exports = rapidApi;
