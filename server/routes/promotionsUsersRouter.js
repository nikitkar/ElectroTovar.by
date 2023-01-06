import Router from "express";
import { PromotionsUsersController } from "../controllers/PromotionsUsersController.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const promotionsUsersRouter = new Router();
const promotionsUsersController = new PromotionsUsersController();

promotionsUsersRouter.post(
  "/",
  CheckMiddleware("ADMIN"),
  promotionsUsersController.create
);
promotionsUsersRouter.get("/", promotionsUsersController.getAll);

export { promotionsUsersRouter };
