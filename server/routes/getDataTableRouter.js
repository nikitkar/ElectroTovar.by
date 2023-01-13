import Router from "express";
import { GetDataTableController } from "../controllers/GetDataTableController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const getDataTableRouter = new Router();
const getDataTableController = new GetDataTableController();

getDataTableRouter.get("/", CheckMiddleware("ADMIN"), getDataTableController.get);
getDataTableRouter.get("/users", CheckMiddleware("ADMIN"), getDataTableController.getClient_discount);

export { getDataTableRouter };
