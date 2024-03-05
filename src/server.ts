import express from "express";
import dotenv from "dotenv";
import { configureRoutes } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY || "";

configureRoutes(app, apiKey);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
