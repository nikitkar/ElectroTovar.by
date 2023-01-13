import Router from "express";

import { UserController } from "../controllers/UserController.js";
import { AuthMiddleware } from "../middleware/AuthMiddleware.js";
import { CheckMiddleware } from "../middleware/CheckMiddleware.js";

const userRouter = new Router();
const userController = new UserController();

userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", AuthMiddleware, userController.check);
userRouter.get("/all", CheckMiddleware("ADMIN"), userController.getAll);

export { userRouter };
