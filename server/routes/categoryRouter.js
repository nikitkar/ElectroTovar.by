import Router from "express";

import { CategoryController } from "../controllers/CategoryController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

//
const categoryRouter = new Router();
const categoryController = new CategoryController();

categoryRouter.post("/", CheckMiddleware("ADMIN"), categoryController.create);
categoryRouter.get("/", categoryController.getAll);

export { categoryRouter };
