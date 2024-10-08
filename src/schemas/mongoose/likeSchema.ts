import { Schema, Types } from "mongoose";

const likeSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: "User" },
    target: {
      id: { type: Types.ObjectId, required: true, refPath: "target.type" },
      type: { type: String, required: true, enum: ["Article", "Comment", "Reply"] },
    },
  },
  { timestamps: true }
);

likeSchema.index({ userId: 1, "target.id": 1, "target.type": 1 }, { unique: true });

export default likeSchema;
