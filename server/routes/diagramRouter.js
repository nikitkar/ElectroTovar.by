import Router from "express";

import { DiagramController } from "../controllers/DiagramController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const diagramRouter = new Router();
const diagramController = new DiagramController();

diagramRouter.get(
  "/pieChart",
  CheckMiddleware("ADMIN"),
  diagramController.pieChart
);
diagramRouter.get(
  "/histogram",
  CheckMiddleware("ADMIN"),
  diagramController.histogram
);
diagramController;
export { diagramRouter };
