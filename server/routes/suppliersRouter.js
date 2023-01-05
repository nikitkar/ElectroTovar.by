import Router from "express";
import { SuppliersController } from "../controllers/SuppliersController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const suppliersRouter = new Router();
const suppliersController = new SuppliersController();

suppliersRouter.post("/", CheckMiddleware("ADMIN"), suppliersController.create);
suppliersRouter.get("/", suppliersController.getAll);

export { suppliersRouter };
