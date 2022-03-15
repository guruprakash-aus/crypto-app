import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PrimaryRoutes, url } from "./constants";

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
        `/fetchCoinHistory?coinID=${coinId}&timeperiod=${timeperiod}`,
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
