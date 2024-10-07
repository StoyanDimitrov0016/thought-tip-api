import { Schema, Types } from "mongoose";

const draftArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [3, "Title must be at least 3 characters long"],
      maxLength: [100, "Title must be at most 100 characters long"],
      trim: true,
    },
    thumbnail: {
      type: String,
      required: false,
      trim: true,
      maxLength: [2048, "URL is exceeding length standard"],
    },
    previewText: {
      type: String,
      required: false,
      trim: true,
      maxLength: [250, "Preview text must be at most 250 characters long"],
    },
    content: {
      type: String,
      required: false,
      trim: true,
      maxLength: [16000, "Content must be at most 16000 characters long"],
    },
    topic: { type: Types.ObjectId, ref: "Topic", required: false },
    tags: { type: [{ type: Types.ObjectId, ref: "Tag", required: false }], required: false },
    averageReadingTime: { type: Number, required: false },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    isPaywalled: { type: Boolean, default: false, required: false },
  },
  { timestamps: true }
);

draftArticleSchema.index({ author: 1 });
draftArticleSchema.index({ title: "text" });

export default draftArticleSchema;
