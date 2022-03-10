import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://rest.coinapi.io";

const coinApiHeader = {
  "X-CoinAPI-Key": "0D92248C-0BDF-478F-9EF5-9FF1F14C8B18",
};

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set("X-CoinAPI-Key", coinApiHeader["X-CoinAPI-Key"]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => `/v1/exchanges`,
    }),
    getExchangeIcons: builder.query({
        query: () => `/v1/exchanges/icons`,
    })
  }),
});

export const { useGetExchangesQuery, useGetExchangeIconsQuery } = coinApi;
