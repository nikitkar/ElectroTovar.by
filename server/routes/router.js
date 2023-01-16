import Router from "express";

import { userRouter } from "./userRouter.js";
import { productRouter } from "./productRouter.js";
import { categoryRouter } from "./categoryRouter.js";
import { pointIssueRouter } from "./pointIssueRouter.js";
import { suppliersRouter } from "./suppliersRouter.js";
import { productWaybillRouter } from "./productWaybillRouter.js";
import { invoiceRouter } from "./invoiceRouter.js";
import { saleRouter } from "./saleRouter.js";
import { salesArchiveRouter } from "./salesArchiveRouter.js";
import { saleProductRouter } from "./saleProductRouter.js";
import { promotionsUsersRouter } from "./promotionsUsersRouter.js";
import { productsRouter } from "./productsRouter.js";
import { getDataTableRouter } from "./getDataTableRouter.js";
import { diagramRouter } from "./diagramRouter.js";

const routers = new Router();

routers.use("/user", userRouter);
routers.use("/product", productRouter);
routers.use("/products", productsRouter);
routers.use("/category", categoryRouter);
routers.use("/suppliers", suppliersRouter);
routers.use("/pointIssue", pointIssueRouter);
routers.use("/productWaybill", productWaybillRouter);
routers.use("/invoice", invoiceRouter);
routers.use("/sale", saleRouter);
routers.use("/salesArchive", salesArchiveRouter);
routers.use("/salesProduct", saleProductRouter);
routers.use("/promotionsUsers", promotionsUsersRouter);

routers.use("/getDataTable", getDataTableRouter);
routers.use("/diagram", diagramRouter);

export { routers };
