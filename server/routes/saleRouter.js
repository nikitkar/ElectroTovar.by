import Router from "express";
import { SaleControlles } from "../controllers/SaleController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const saleRouter = new Router();
const saleControlles = new SaleControlles();

saleRouter.post("/", CheckMiddleware("ADMIN"), saleControlles.create);
saleRouter.get("/", saleControlles.getAll);

export { saleRouter };
