import Router from "express";
import { InvoiceController } from "../controllers/InvoiceController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const invoiceRouter = new Router();
const invoiceController = new InvoiceController();

invoiceRouter.post("/", CheckMiddleware("ADMIN"), invoiceController.create);
invoiceRouter.get("/", invoiceController.getAll);

export { invoiceRouter };
