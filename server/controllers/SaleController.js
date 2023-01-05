import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class SaleControlles {
  async create(req, res, next) {
    const {
      idClient,
      idProduct,
      dataSale = Date.now(),
      priceSale,
      countSale,
      numberSale,
    } = req.body;

    if (
      !idClient ||
      idClient == "" ||
      !idProduct ||
      idProduct == "" ||
      !priceSale ||
      priceSale == "" ||
      !countSale ||
      countSale == "" ||
      !numberSale ||
      numberSale == ""
    )
      return next(
        ApiError.badRequest(
          "Incorrect idClient or idProduct or dataSale or priceSale or countSale or numberSale"
        )
      );

    const query = `INSERT INTO sale(idClient, idProduct, dataSale, priceSale, countSale, numberSale) VALUES (${idClient}, ${idProduct}, '${dataSale}', ${priceSale}, ${countSale}, ${numberSale})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getAll(req, res) {
    const query = "SELECT * FROM sale";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { SaleControlles };
