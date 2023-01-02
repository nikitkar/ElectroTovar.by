import Router from "express";

import { UserController } from "../controllers/UserController.js";
import { AuthMiddleware } from "../middleware/AuthMiddleware.js";

const userRouter = new Router();
const userController = new UserController();

userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);
userRouter.get("/auth", AuthMiddleware, userController.check);

export { userRouter };
