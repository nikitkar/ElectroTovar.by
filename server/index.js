// подлючаемые модули
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import { fileURLToPath } from "url";
import { dirname } from "path";
import * as path from "path";

import { routers } from "./routes/router.js";
import { ErrorHandlingMiddleware } from "./middleware/ErrorHandlingMiddleware.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", routers);

//обработчик ошибок, последний Middleware
app.use(ErrorHandlingMiddleware);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Working" });
});

//запуск сервера
const start = async () => {
  try {
    app.listen(process.env.PORT_SERVER, () => console.log("Start server"));
  } catch (e) {
    console.log("Error start server - " + e);
  }
};

start();
