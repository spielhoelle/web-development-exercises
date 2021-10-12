const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  locations: [{ type: Schema.ObjectId, ref: "Location" }],
  email: String,
  body: String,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isCompany: String
});

module.exports = mongoose.model("Contact", ContactSchema);
