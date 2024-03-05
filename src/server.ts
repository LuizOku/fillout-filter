import express, { Express } from "express";
import dotenv from "dotenv";
import { configureRoutes } from "./routes";

dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || "3000");
const apiKey: string = process.env.API_KEY || "";

configureRoutes(app, apiKey);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
