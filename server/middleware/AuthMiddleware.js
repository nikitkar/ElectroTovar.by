import jwt from "jsonwebtoken";
import ApiError from "../error/ApiError.js";

function AuthMiddleware(req, res, next) {
  if (req.method == "OPTIONS") next();

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    next();
  } catch (e) {
    return next(ApiError.notAuthorized("Not authorized"));
  }
}

export { AuthMiddleware };
