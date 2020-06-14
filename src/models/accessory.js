const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  cubes: [{ type: Schema.Types.ObjectId, ref: "Cube" }],
});

const Accessoty = mongoose.model("Accessory", accessorySchema);

module.exports = Accessoty;
