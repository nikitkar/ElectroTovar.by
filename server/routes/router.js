import Router from "express";

import { userRouter } from "./userRouter.js";
import { productRouter } from "./productRouter.js";
import { categoryRouter } from "./categoryRouter.js";
import { brandRouter } from "./brandRouter.js";

const routers = new Router();

routers.use("/user", userRouter);
routers.use("/product", productRouter);
routers.use("/category", categoryRouter);
routers.use("/brand", brandRouter);

export { routers };
