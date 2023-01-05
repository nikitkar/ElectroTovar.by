import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class ProductWaybillController {
  async create(req, res, next) {
    const { idInvice, idCategory, nameProduct, countProducts } = req.body;

    if (
      !idInvice ||
      idInvice == "" ||
      !idCategory ||
      idCategory == "" ||
      !nameProduct ||
      nameProduct == "" ||
      !countProducts ||
      countProducts == ""
    )
      return next(
        ApiError.badRequest(
          "Incorrect idInvice or idCategory or nameProduct or countProducts"
        )
      );

    const query = `INSERT INTO productWaybill(idInvice, idCategory, nameProduct, countProducts) VALUES (${idInvice}, ${idCategory}, '${nameProduct}', ${countProducts})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getAll(req, res) {
    const query = "SELECT * FROM productWaybill";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { ProductWaybillController };
