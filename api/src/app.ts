import cors from "cors";
import express, { json } from "express";
import helmet from "helmet";
import { ErrorHandler } from "./errors/errorHandler";
import { cacheRouter } from "./routes/cache";
import { postsRouter } from "./routes/posts";

export const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());
app.use(helmet());

app.use("/posts", postsRouter);
app.use("/cache", cacheRouter);

app.use(ErrorHandler.execute);
