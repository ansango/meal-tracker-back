const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes");
const db = require("./db/db");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;
const DB = process.env.MONGO_URI_PROD;

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

const start = async () => {
  await db.connect(DB);
  app.listen(PORT, () => {
    console.info(`Meal Tracker is running on: ${PORT}`);
  });
};

start();
