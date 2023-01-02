import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class BrandController {
  async create(req, res, next) {
    const { name } = req.body;

    if (!name || name == "") return next(ApiError.badRequest("Incorrect name"));

    const query = `INSERT INTO brand(nameBrand) VALUES ('${name}')`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }
  async getAll(req, res) {
    const query = "SELECT * FROM brand";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { BrandController };
