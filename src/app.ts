import express from "express";
import cors from "cors";
import tagRouter from "./routes/tagsRoutes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors()).use(express.json());

app.use("/tags", tagRouter);

app.use(errorMiddleware);

export default app;
