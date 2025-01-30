import express from "express";
import cors from "cors";
import tagRouter from "./routes/tagsRoutes";
import path from "path";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors()).use(express.json());

// app.use(express.static(path.join(__dirname, "public")));

app.use("/tags", tagRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.use(errorMiddleware);

export default app;
