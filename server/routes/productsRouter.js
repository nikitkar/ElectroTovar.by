import Router from "express";
import { ProductController } from "../controllers/ProductController.js";

const productsRouter = new Router();
const productsController = new ProductController();

productsRouter.get("/", productsController.getAllProduct);

export { productsRouter };
