import express from "express";
import cors from "cors";
import morgan from "morgan";
import appRoutes from "./routes";

const app = express();

// Cors
app.use(cors());

// Logging
app.use(morgan("dev"));

app.use(express.json());

// Routes
app.use(appRoutes);

export default app;
