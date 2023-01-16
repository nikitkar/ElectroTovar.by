import Router from "express";
import { GetDataTableController } from "../controllers/GetDataTableController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const getDataTableRouter = new Router();
const getDataTableController = new GetDataTableController();

getDataTableRouter.get("/", CheckMiddleware("ADMIN"), getDataTableController.get);
getDataTableRouter.get("/delete", CheckMiddleware("ADMIN"), getDataTableController.deletedRow);
getDataTableRouter.get("/search", CheckMiddleware("ADMIN"), getDataTableController.searchData);
getDataTableRouter.get("/sort", CheckMiddleware("ADMIN"), getDataTableController.sortData);
getDataTableRouter.get("/sort_search", CheckMiddleware("ADMIN"), getDataTableController.sortData_search);
getDataTableRouter.get("/users", CheckMiddleware("ADMIN"), getDataTableController.getClient_discount);
getDataTableRouter.get("/search_discount", CheckMiddleware("ADMIN"), getDataTableController.getClient_discount_search);

export { getDataTableRouter };
