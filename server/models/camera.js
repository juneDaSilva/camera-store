const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CameraSchema = new Schema({
  brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
  model: { type: String, required: true },
  system: { type: Schema.Types.ObjectId, ref: 'System', required: true },
  price: { type: Number, required: true },
});

CameraSchema.virtual('url').get(function () {
  return `/catalog/camera/${this._id}`;
});

module.exports = mongoose.model('Camera', CameraSchema);
