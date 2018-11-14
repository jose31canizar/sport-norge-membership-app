const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Base = require("./base");
const extendSchema = require("./extend-schema");

let offerSchema = extendSchema(Base, {}, { collection: "sport.norge.offers" });

module.exports = mongoose.model("offer", offerSchema);
