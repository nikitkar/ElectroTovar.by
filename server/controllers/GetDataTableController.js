import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class GetDataTableController {
  async get(req, res, next) {
    const { name } = req.body;

    if (!name || name == "") return next(ApiError.badRequest("Incorrect name"));

    const query = `SELECT * FROM ${name}`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }

  async getClient_discount(req, res, next) {
    const query = `
    SELECT
        client.idClient, client.nameClient, client.emailClient, client.telephoneClient, client.addressClient, promotionsUsers.percentPromotionsUsers 
    FROM client, promotionsUsers 
    WHERE client.idClient = promotionsUsers.idClient`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { GetDataTableController };
