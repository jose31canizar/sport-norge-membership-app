const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Benefit = require("./benefit");

export const clubSchema = new Schema(
  {
    name: { type: String, required: true },
    parent_club: { type: Schema.ObjectId, ref: this, required: false },
    benefits: [{ type: Schema.ObjectId, ref: Benefit }]
  },
  { collection: "sport.norge.clubs" }
);

export default mongoose.model("club", clubSchema);
