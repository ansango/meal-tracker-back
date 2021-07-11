import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import { routes } from "./routes";
import { db } from "./db";

const app = express();
app.use(morgan("dev"));
dotenv.config();

app.use(bodyParser.json());

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
