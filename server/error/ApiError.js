class ApiError extends Error {
  constructor(status, message) {
    super(message);

    this.name = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static notAuthorized(message) {
    return new ApiError(401, message);
  }
}

export default ApiError;
