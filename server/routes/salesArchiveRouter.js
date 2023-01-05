import Router from "express";
import { SalesArchiveController } from "../controllers/SalesArchiveController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const salesArchiveRouter = new Router();
const salesArchiveController = new SalesArchiveController();

salesArchiveRouter.post("/", CheckMiddleware("ADMIN"), salesArchiveController.create);
salesArchiveRouter.get("/", salesArchiveController.getAll);

export { salesArchiveRouter };
