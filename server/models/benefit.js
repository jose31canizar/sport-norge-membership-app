const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const extendSchema = require("./extend-schema");

let benefitSchema = extendSchema(
  Base,
  {
    recurrence: { type: String, required: true }
  },
  { collection: "sport.norge.benefits" }
);

module.exports = mongoose.model("benefit", benefitSchema);
