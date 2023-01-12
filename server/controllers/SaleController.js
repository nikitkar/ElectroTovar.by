import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class SaleControlles {
  async create(req, res, next) {
    const {
      idClient,
      idProduct,
      priceSale,
      countSale,
      numberSale,
      dataSale = new Date().toISOString().slice(0, 19).replace("T", " "),
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
          "Incorrect idClient or idProduct or priceSale or countSale or priceSale or numberSale"
        )
      );

    //   const dataSale = new Date();

    const query = `INSERT INTO sale(idClient, idProduct, dataSale, priceSale, countSale, numberSale) VALUES (${idClient}, ${idProduct}, '${dataSale}', ${priceSale}, ${countSale}, ${numberSale})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getNumberSale(req, res) {
    const query = `SELECT MAX(numberSale) AS total FROM sale`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
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
