import { Router } from "express";
import { fifoRoutes } from "../controllers";
import errorMiddleware from "../middlewares/errorHandler";

const appRoutes = Router();

appRoutes.use(fifoRoutes);

// Handle errors throughout routes
appRoutes.use(errorMiddleware);

export default appRoutes;
