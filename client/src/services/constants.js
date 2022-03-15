export const PrimaryRoutes = {
    CoinRanking: '/crypto-api/coinranking',
    CoinApi: '/crypto-api/coinApi',
    rapidApi: '/crypto-api/rapidApi',
}

export const url = () => {
    if (process.env.NODE_ENV === "test") {
      return "http://127.0.0.1:5000";
    } else {
      const urlPart =
        window.location &&
        window.location.protocol + "//" + window.location.hostname;
      return window.location && window.location.hostname === "localhost"
        ? urlPart + ":5000"
        : urlPart;
    }
  };