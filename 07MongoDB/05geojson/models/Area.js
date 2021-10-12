const Schema = require("mongoose").Schema;

const areaSchema = new Schema({
  name: String,
  type: {type: String},
  properties: {},
  geometry: {
      type: { type: String },
      coordinates: {}
  }
});
areaSchema.index({ geometry: '2dsphere' });

module.exports = areaSchema;
