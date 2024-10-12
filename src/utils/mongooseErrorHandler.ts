import mongoose from "mongoose";
import { AlreadyExistsError, DatabaseError, ValidationError } from "../utils/customErrors.js";

export async function handleMongooseError<T>(operation: () => Promise<T>): Promise<T> {
  try {
    return await operation();
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof mongoose.Error.ValidationError) {
      const errorFields = [];
      for (const field in error.errors) {
        errorFields.push({
          field,
          message: error.errors[field].message,
        });
      }
      throw new ValidationError(error.message, errorFields);
    } else if (error instanceof mongoose.Error.CastError) {
      throw new ValidationError(`Invalid field: ${error.path}`);
    } else if (error instanceof mongoose.mongo.MongoServerError && error.code === 11000) {
      throw new AlreadyExistsError("Duplicate entry detected.");
    } else {
      throw new DatabaseError("An unexpected database error occurred.");
    }
  }
}
