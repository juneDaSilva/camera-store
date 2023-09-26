const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CameraInstanceSchema = new Schema({
  camera: { type: Schema.Types.ObjectId, ref: 'Camera', required: true }, // reference to associated camera
  imprint: { type: String, required: true },
});

CameraInstanceSchema.virtual('url').get(function () {
  return `/catalog/camerainstance/${this._id}`;
});

module.exports = mongoose.model('CameraInstance', CameraInstanceSchema);
