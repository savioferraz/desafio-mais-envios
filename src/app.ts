import express from "express";
import cors from "cors";
import tagRouter from "./routes/tagsRoutes";

const app = express();

app.use(cors()).use(express.json());

app.use("/tags", tagRouter);

export default app;
