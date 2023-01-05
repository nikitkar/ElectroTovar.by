import ApiError from "../error/ApiError.js";

import { db } from "../MySQL.js";

class PointIssueController {
  async create(req, res, next) {
    const { address, workingTime } = req.body;

    if (!address || address == "" || !workingTime || workingTime == "")
      return next(ApiError.badRequest("Incorrect address or workingTime"));

    const query = `INSERT INTO pointIssue(addressPointIssue, workingHousePointIssue) VALUES ('${address}', ${workingTime})`;

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ message: "Successful" });
    });
  }

  async getAll(req, res) {
    const query = "SELECT * FROM pointIssue";

    await db.query(query, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  }
}

export { PointIssueController };
