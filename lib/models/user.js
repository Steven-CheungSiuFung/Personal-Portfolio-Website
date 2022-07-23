import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: "Email is required",
  },
  password: {
    type: String,
    required: "Password is requied",
  },
});

export default mongoose.models["User"]
  ? mongoose.model("User")
  : mongoose.model("User", userSchema);
