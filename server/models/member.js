const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const extendSchema = require("./extend-schema");
const Club = require("./club");
const Division = require("./division");
import { userSchema } from "./user";

let memberSchema = extendSchema(
  userSchema,
  {
    activation_code: { type: String, required: true },
    qr_code: { type: String, required: true },
    last_login: { type: Date, required: true }
  },
  { collection: "sport.norge.members" }
);

module.exports = mongoose.model("member", memberSchema);
