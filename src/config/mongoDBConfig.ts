import mongoose from "mongoose";
import "dotenv/config.js";

const connectToDatabase = async () => {
  try {
    // Check for the MongoDB connection string in environment variables
    const connectionString = process.env.MONGODB_CONNECTION_STRING;

    if (!connectionString) {
      throw new Error(
        "MONGODB_CONNECTION_STRING is a falsy value - make sure it's imported correctly!"
      );
    }

    // Connect to MongoDB
    await mongoose.connect(connectionString);
    console.log("Database connected successfully.");

    // Connection Event Listeners
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to the database.");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from the database.");
    });

    // Close the MongoDB connection gracefully
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("Mongoose connection closed due to application termination.");
      process.exit(0);
    });
  } catch (error: unknown) {
    // Check if error is with known origin or not
    if (error instanceof Error) {
      console.error("Database connection failed with error:", error.message);
      console.error("Stack trace:", error.stack);
    } else {
      console.error("An unknown error occurred during database connection:", error);
    }

    //Rethrow the error
    throw error;
  }
};

export default connectToDatabase;
