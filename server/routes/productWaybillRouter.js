import Router from "express";
import { ProductWaybillController } from "../controllers/ProductWaybillController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const productWaybillRouter = new Router();
const productWaybillController = new ProductWaybillController();

productWaybillRouter.post(
  "/",
  CheckMiddleware("ADMIN"),
  productWaybillController.create
);
productWaybillRouter.get("/", productWaybillController.getAll);

export { productWaybillRouter };
