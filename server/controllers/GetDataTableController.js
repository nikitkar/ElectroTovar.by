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
    try {
      const { nameColumn, sortParam } = req.query;

      if (!nameColumn || nameColumn == "" || !sortParam || sortParam == "")
        return next(ApiError.badRequest("Incorrect nameColumn or sortParam"));

      const query =
        nameColumn === "percentPromotionsUsers"
          ? `SELECT client.idClient, client.nameClient, client.emailClient, client.telephoneClient, client.addressClient, promotionsUsers.percentPromotionsUsers FROM client, promotionsUsers WHERE client.idClient = promotionsUsers.idClient ORDER BY promotionsUsers.${nameColumn} ${sortParam}`
          : `SELECT client.idClient, client.nameClient, client.emailClient, client.telephoneClient, client.addressClient, promotionsUsers.percentPromotionsUsers FROM client, promotionsUsers WHERE client.idClient = promotionsUsers.idClient ORDER BY client.${nameColumn} ${sortParam}`;

      await db.query(query, (err, data) => {
        if (err) return res.json(err);
        else return res.json(data);
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export { GetDataTableController };
