import ApiError from "../error/ApiError.js";

export function ErrorHandlingMiddleware(err, req, res, next) {
  if (err instanceof ApiError)
    return res.json({ err: err.message });

  return res.status(500).json({ err: "Unhandled error" });
}
