import { Schema, Types } from "mongoose";

const replyCommentSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: "User" },
    parentCommentId: { type: Types.ObjectId, required: true, ref: "Comment" },
    articleId: { type: Types.ObjectId, required: true, ref: "Article" },
    content: {
      type: String,
      required: [true, "Content is required"],
      minLength: [1, "Content must be at least 1 characters long"],
      maxLength: [1200, "Content must be at most 1200 characters long"],
      trim: true,
    },
  },
  { timestamps: true }
);

replyCommentSchema.index({ userId: 1, parentCommentId: 1, articleId: 1 });

export default replyCommentSchema;
