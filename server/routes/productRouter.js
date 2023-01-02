import Router from "express";
import { ProductController } from "../controllers/ProductController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const productRouter = new Router();
const productController = new ProductController();

productRouter.post("/", CheckMiddleware("ADMIN"), productController.create);
productRouter.get("/", productController.getAll);
productRouter.get("/:id", productController.getOne);

export { productRouter };
