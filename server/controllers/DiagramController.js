import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class DiagramController {
  async pieChart(req, res) {
    const query = `
    SELECT category.idCategory, category.nameCategory, SUM(product.countProduct) AS sum
    FROM category
    INNER JOIN product
    ON product.idCategory = category.idCategory
    GROUP BY category.idCategory`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }

  async histogram(req, res) {
    const query = `
    SELECT (SELECt SUM(product.countProduct) FROM product) AS count, category.nameCategory, SUM(product.countProduct) AS sum
    FROM category
    INNER JOIN product
    ON product.idCategory = category.idCategory
    GROUP BY category.idCategory`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { DiagramController };
