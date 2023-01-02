import Router from "express";

import { BrandController } from "../controllers/BrandController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const brandRouter = new Router();
const brandController = new BrandController();

brandRouter.post("/", CheckMiddleware("ADMIN"), brandController.create);
brandRouter.get("/", brandController.getAll);

export { brandRouter };
