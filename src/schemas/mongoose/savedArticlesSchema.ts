import { Schema, Types } from "mongoose";

const savedArticleSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: "User" },
    articleId: { type: Types.ObjectId, required: true, ref: "Article" },
    saved: {
      type: [String],
      enum: ["bookmark", "watchLater"],
      default: ["watchLater"],
    },
  },
  { timestamps: true }
);

savedArticleSchema.index({ userId: 1, articleId: 1 }, { unique: true });

export default savedArticleSchema;
