import Router from "express";
import { PointIssueController } from "../controllers/PointIssueController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const pointIssueRouter = new Router();
const pointIssueController = new PointIssueController();

pointIssueRouter.post("/", CheckMiddleware("ADMIN"), pointIssueController.create);
pointIssueRouter.get("/", pointIssueController.getAll);

export { pointIssueRouter };
