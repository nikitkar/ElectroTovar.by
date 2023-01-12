import Router from "express";
import { SalesProductController } from "../controllers/SalesProductController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const saleProductRouter = new Router();
const salesProductController = new SalesProductController();

saleProductRouter.post("/", salesProductController.create);
saleProductRouter.get("/", CheckMiddleware("ADMIN"), salesProductController.getAll);

export { saleProductRouter };
