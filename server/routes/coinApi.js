"use-strict";

const express = require("express");
const coinApi = express.Router();
const axios = require("axios");
require("dotenv").config();

const COIN_API_KEY = process.env.COIN_API_KEY;
const BASE_URL = 'https://rest.coinapi.io'

const fetchExchanges = async (req, res) => {
    console.log("Fetch Exchanges");
    
    try {
        const exchangesResult = await axios.get(BASE_URL + '/v1/exchanges', {
            headers: {
                'X-CoinAPI-Key': COIN_API_KEY
            }
        });
        res.send(exchangesResult.data);
    } catch (error) {
        console.log(error);
        res.send(error);
        
    }
}

coinApi.get("/fetchExchanges", fetchExchanges);
module.exports = coinApi;

