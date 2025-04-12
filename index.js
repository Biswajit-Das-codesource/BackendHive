import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./DB/db.js";
const app = express();

dotenv.config({});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello from server");
});

const PORT = process.env.PORT || 4000;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
});
