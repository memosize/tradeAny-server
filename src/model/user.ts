 import * as mongoose from "mongoose";
const DB_URL = "mongodb://localhost:27017/tradeAny";
mongoose.connect(DB_URL);
const user = {
  user: { type: String, require: true },
  pwd: { type: String, require: true },
  type: { type: String, require: true },
  avatar: { type: String },
  desc: { type: String },
  title: { type: String },
  company: { type: String },
  money: { type: String },
  nick: {type:String,require:true}
};
mongoose.model("user", new mongoose.Schema(user));
export const userModel = mongoose.model("user");

