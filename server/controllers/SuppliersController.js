import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class SuppliersController {
  async create(req, res, next) {
    const { name } = req.body;

    if (!name || name == "") return next(ApiError.badRequest("Incorrect name"));

    const query = `INSERT INTO suppliers(suppliers) VALUES ('${suppliers}')`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getAll(req, res) {
    const query = "SELECT * FROM suppliers";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { SuppliersController };
