const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const routes = require("./routes");
app.use(cors());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.disable("view cache");
// app.use((req, res, next) => {
//   res.header("Cache-Control", "no-store, no-cache, must-revalidate, private");
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
if (process.env.NODE_ENV !== "production") {
  console.log("Not Production");

  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );
  //   res.header(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, OPTIONS, PUT, DELETE"
  //   );
  //   res.header("Access-Control-Expose-Headers", "x-suggested-filename");
  //   next();
  // });
} else if (process.env.NODE_ENV === "production") {
  console.log("Production");
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// app.get("/crypto-api", (req, res) => {
//   res.send("I am working");
// });

app.use("/crypto-api/coinRanking", routes.coinRanking);
app.use("/crypto-api/coinApi", routes.coinApi);
app.use("/crypto-api/rapidApi", routes.rapidApi);
