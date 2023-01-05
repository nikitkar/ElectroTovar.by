import Router from "express";

import { userRouter } from "./userRouter.js";
import { productRouter } from "./productRouter.js";
import { categoryRouter } from "./categoryRouter.js";
import { brandRouter } from "./brandRouter.js";
import { pointIssueRouter } from "./pointIssueRouter.js";
import { suppliersRouter } from "./suppliersRouter.js";
import { productWaybillRouter } from "./productWaybillRouter.js";
import { invoiceRouter } from "./invoiceRouter.js";
import { saleRouter } from "./saleRouter.js";
import { salesArchiveRouter } from "./salesArchiveRouter.js";

const routers = new Router();

routers.use("/user", userRouter);
routers.use("/product", productRouter);
routers.use("/category", categoryRouter);
routers.use("/brand", brandRouter);
routers.use("/pointIssue", pointIssueRouter);
routers.use("/suppliers", suppliersRouter);
routers.use("/productWaybill", productWaybillRouter);
routers.use("/invoice", invoiceRouter);
routers.use("/sale", saleRouter);
routers.use("/salesArchive", salesArchiveRouter);

export { routers };
