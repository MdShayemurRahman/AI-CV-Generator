export class ApiError {
  constructor(public code: number, public message: string) {
    this.code = code;
    this.message = message;
  }
  static resourceNotFound(msg: string) {
    return new ApiError(404, msg);
  }
  static badRequest(msg: string) {
    return new ApiError(400, msg);
  }
  static internalServerError(msg: string) {
    return new ApiError(500, msg);
  }
}
