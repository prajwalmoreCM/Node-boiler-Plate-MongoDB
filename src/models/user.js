import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    allowNull: false,
  },
  password: {
    type: String,
    allowNull: false,
  },
  role: {
    type: String,
    defaultValue: "User",
  },
  is_active: {
    type: Boolean,
    defaultValue: true,
  },
},{timestamps:true});
const User = mongoose.model("user",UserSchema)


export default User;
