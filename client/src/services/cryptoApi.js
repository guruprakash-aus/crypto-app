import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PrimaryRoutes, url } from "./constants";
// const cryptoApiHeaders = {
// "x-rapidapi-host": "api.coinranking.com/v2",
// "access-control-allow-origin": "*",
// "x-access-token": "coinrankingfbaa34388423aae305f67f1fa91c08386aab637baa5b0bfd",
// };

// const baseUrl = "https://api.coinranking.com/v2";
const baseUrl = "https://rest.coinapi.io";

const coinApiHeader = {
  "X-CoinAPI-Key": "0D92248C-0BDF-478F-9EF5-9FF1F14C8B18",
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: url() }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        PrimaryRoutes.CoinRanking + `/fetchCoins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinID) =>
        PrimaryRoutes.CoinRanking + `/fetchCoinDetails?coinID=${coinID}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        PrimaryRoutes.CoinRanking +
        `/fetchCoinHistory/?coinID=${coinId}&timeperiod=${timeperiod}`,
    }),
    getExchanges: builder.query({
      query: () => PrimaryRoutes.CoinRanking + "/fetchExchanges",
    }),
  }),
});

// Redux Toolkit creates a query hook to use it
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
