import ApiError from "../error/ApiError.js";
import { v4 as uuidv4 } from "uuid";

import { db } from "../MySQL.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, count, info, idCategory, idBrand = 0 } = req.body;
      const { img } = req.files;

      if (!name || !price || !count || !info || !idCategory || !img)
        return next(ApiError.badRequest("Incorrect name / price / count / info / idCategory / img"));

      let fileName = uuidv4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName), (err) => {
        if (err) next(ApiError.internal(err.message));
      });

      const createProductQuery = `INSERT INTO product(idCategory, nameProduct, priceProduct, countProduct, imgProduct) VALUES (${idCategory}, '${name}', ${price}, ${count}, '${fileName}')`;

      await db.query(createProductQuery, (err, data) => {
        if (err) return res.json(err);
        else return res.json(data);
      });

      const idProductLastQuery = "SELECT max(idProduct) FROM product";
      const idProductLast = await new Promise((resolve) => {
        db.query(idProductLastQuery, (err, data) => {
          if (err) return res.json(err);
          else return resolve(data);
        });
      });

      if (info) {
        info = JSON.parse(info);

        info.forEach((item) => {
          const query = `INSERT INTO product_info(idProduct, titleProduct, descriptionProduct) VALUES (${idProductLast}, ${item.title}, ${item.description})`;

          db.query(query, (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
          });
        });
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { idCategory, limit = 12, page = 1 } = req.query;

      let products;
      let offset = page * limit - limit;

      if (idCategory) {
        const productCategoryQuery = `SELECT * FROM product WHERE idCategory=${idCategory} LIMIT ${limit} OFFSET ${offset}`;

        products = await new Promise((resolve) => {
          db.query(productCategoryQuery, (err, data) => {
            if (err) return res.json(err);
            else return resolve(data);
          });
        });
      }

      if (!idCategory) {
        const productAllQuery = `SELECT * FROM product LIMIT ${limit} OFFSET ${offset}`;

        products = await new Promise((resolve) => {
          db.query(productAllQuery, (err, data) => {
            if (err) return res.json(err);
            else return resolve(data);
          });
        });
      }

      return res.json(products);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      let product;
      const { id } = req.params;

      const productOneQuery = `
      SELECT product.nameProduct, product.priceProduct, product.countProduct, product.imgProduct, category.nameCategory FROM product, category WHERE product.idProduct=${id}`;

      const product_infoQuery = `SELECT * FROM product_info WHERE idProduct=${id}`;

      const productOne = await new Promise((resolve) => {
        db.query(productOneQuery, (err, data) => {
          if (err) return res.json(err);
          else return resolve(data);
        });
      });

      const product_info = await new Promise((resolve) => {
        db.query(product_infoQuery, (err, data) => {
          if (err) return res.json(err);
          else return resolve(data);
        });
      });

      product = {
        product: productOne,
        info: product_info,
      };

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export { ProductController };
