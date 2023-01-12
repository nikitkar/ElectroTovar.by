import Router from "express";
import { SaleControlles } from "../controllers/SaleController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const saleRouter = new Router();
const saleControlles = new SaleControlles();

saleRouter.post("/", saleControlles.create);
saleRouter.get("/numberSale", saleControlles.getNumberSale);
saleRouter.get("/", CheckMiddleware("ADMIN"), saleControlles.getAll);

export { saleRouter };
