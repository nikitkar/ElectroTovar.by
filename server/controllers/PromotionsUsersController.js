import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class PromotionsUsersController {
  async create(req, res, next) {
    const { idClient, percentPromotionsUsers } = req.body;

    if (
      !idClient ||
      idClient == "" ||
      !percentPromotionsUsers ||
      percentPromotionsUsers == ""
    )
      return next(
        ApiError.badRequest("Incorrect idClient or percentPromotionsUsers")
      );

    const query = `INSERT INTO promotionsUsers(idClient, percentPromotionsUsers) VALUES (${idClient}, ${percentPromotionsUsers})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getAll(req, res) {
    const query = "SELECT * FROM promotionsUsers";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { PromotionsUsersController };
