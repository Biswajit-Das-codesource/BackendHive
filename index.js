import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./DB/db.js";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import projectRoutes from "./routes/project.routes.js"
const app = express();

dotenv.config({});

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use("/api/v1",userRoutes)
app.use("/api/v1/project",projectRoutes)
const PORT = process.env.PORT || 4000;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
});

