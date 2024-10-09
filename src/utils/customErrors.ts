export class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  public invalidFields: { field: string; message: string }[] | undefined;

  constructor(message: string, fields?: { field: string; message: string }[]) {
    super(message, 400);
    this.invalidFields = fields;
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class AlreadyExistsError extends AppError {
  constructor(message: string) {
    super(message, 409);
  }
}

export class UriTooLongError extends AppError {
  constructor(message: string) {
    super(message, 414);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message: string) {
    super(message, 429);
  }
}

export class DatabaseError extends AppError {
  constructor(message: string) {
    super(message, 500);
  }
}
