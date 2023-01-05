import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class InvoiceController {
  async create(req, res, next) {
    const {
      idSuppliers,
      idPointIssue,
      priceInvoice,
      dateDeliveryInvoice = Date.now(),
      countInvoice,
    } = req.body;

    if (
      !idSuppliers ||
      idSuppliers == "" ||
      !idPointIssue ||
      idPointIssue == "" ||
      !priceInvoice ||
      priceInvoice == "" ||
      !countInvoice ||
      countInvoice == ""
    )
      return next(
        ApiError.badRequest(
          "Incorrect idSuppliers oridPointIssue or priceInvoice or countInvoice"
        )
      );

    const query = `INSERT INTO invoice(idSuppliers, idPointIssue, priceInvoice, 1, countInvoice) VALUES (${idSuppliers}, ${idPointIssue}, ${priceInvoice}, '${dateDeliveryInvoice}', ${countInvoice})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getAll(req, res) {
    const query = "SELECT * FROM invoice";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { InvoiceController };
