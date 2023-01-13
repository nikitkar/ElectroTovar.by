import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

import ApiError from "../error/ApiError.js";
import { db } from "../MySQL.js";

const generateJwt = (id, login, role) => {
  return Jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const {
      login,
      password,
      name,
      email,
      telephone,
      address,
      role = "USER",
    } = req.body;

    if (!login || !password)
      return next(ApiError.badRequest("Incorrect login or password"));

    const candidateQuert = `SELECT * FROM credentials WHERE loginClient='${login}'`;
    const candidate = await new Promise((resolve) => {
      db.query(candidateQuert, (err, data) => {
        if (err) return res.json(err);
        else return resolve(data);
      });
    });

    if (candidate.length != 0)
      return next(
        ApiError.badRequest("A user with this username already exists")
      );

    const hashPassword = await bcrypt.hash(password, 5);

    const clientQuery = `INSERT INTO client(nameClient, emailClient, telephoneClient, addressClient) VALUES ('${name}','${email}','${telephone}','${address}');`;
    const clientAUTHQuery = `INSERT INTO credentials(idClient, loginClient, passwordClient, roleClient) VALUES ((SELECT max(idClient) FROM client), '${login}', '${hashPassword}', '${role}');`;
    const idClientQuery = `SELECT max(idClient) as idClient FROM client`;

    try {
      await db.query(clientQuery, (err, data) => {
        if (err) return res.json("clientQuery error - " + err);
      });
      await db.query(clientAUTHQuery, (err, data) => {
        if (err) return res.json("clientAUTHQuery error - " + err);
      });
    } catch (e) {
      ApiError.badRequest("Error");
    }

    try {
      let idClient = await new Promise((resolve) => {
        db.query(idClientQuery, (err, data) => {
          if (err) return res.json("idClientQuery - " + err);
          else return resolve(data);
        });
      });
      idClient = JSON.stringify(idClient[0]["idClient"]);

      const jwtToken = generateJwt(idClient, login, role);
      return res.json({ token: jwtToken });
    } catch (e) {
      ApiError.badRequest("Error - " + e.message);
    }
  }

  async login(req, res, next) {
    const { login, password } = req.body;

    const userQuery = `SELECT * FROM credentials WHERE loginClient='${login}'`;
    let user = await new Promise((resolve) => {
      db.query(userQuery, (err, data) => {
        if (err) return res.json(err);
        else return resolve(data);
      });
    });

    if (Object.keys(user).length == 0)
      return next(ApiError.internal("User not found"));

    let comparePassword = bcrypt.compareSync(
      password,
      user[0]["passwordClient"]
    );
    if (!comparePassword)
      return next(ApiError.internal("Invalid password specifiedы"));

    const token = generateJwt(
      user[0]["idClient"],
      user[0]["loginClient"],
      user[0]["roleClient"]
    );
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.login, req.user.role);
    return res.json({ token });
  }

  async getAll(req, res) {
    try {
      const userAllQuery = "SELECT * FROM client";

      db.query(userAllQuery, (err, data) => {
        if (err) return res.json(err);
        else return res.json(data);
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export { UserController };
