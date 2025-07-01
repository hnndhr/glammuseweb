import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePicture: string;
  subscriptionPlan: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    subscriptionPlan: { type: String, default: "free" },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite error in dev
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
