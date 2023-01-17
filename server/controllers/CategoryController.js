import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class CategoryController {
  // добавлени в базу запись
  async create(req, res, next) {
    const { name, countAll = 0 } = req.body;

    // проверка на валидность
    if (!name || name == "") return next(ApiError.badRequest("Incorrect name"));

    const query = `INSERT INTO category(nameCategory, countAllCategory) VALUES ('${name}', ${countAll})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  // получение записи
  async getAll(req, res) {
    const query = "SELECT * FROM category";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { CategoryController };
