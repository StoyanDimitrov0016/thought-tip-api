import { InferSchemaType, model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    clerkUserId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String },
    role: { type: String, required: true },
    zebedeeWalletId: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
);

export type UserType = InferSchemaType<typeof UserSchema>;

const User = model("User", UserSchema);
export default User;
