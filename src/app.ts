import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { clerkMiddleware, getAuth } from "@clerk/express";
import articleCore from "./routes/articleCore.router.js";

const secretKey = process.env.CLERK_SECRET_KEY;
const publishableKey = process.env.CLERK_PUBLISHABLE_KEY;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  clerkMiddleware({
    secretKey,
    publishableKey,
  })
);

app.use("/api/v1/articles/", articleCore);

export default app;
