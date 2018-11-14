const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Club = require("./club");
const Division = require("./division");

export const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    club: { type: Schema.ObjectId, ref: Club, required: false },
    division: { type: Schema.ObjectId, ref: Division, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    lost_password_token: { type: String, required: false },
    privileges: [{ type: String }],
    status: { type: String, required: true }
  },
  { collection: "sport.norge.users" }
);

export default mongoose.model("user", userSchema);
