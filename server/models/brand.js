const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
});

BrandSchema.virtual('url').get(function () {
  // Dont use arrow function as we'll need the this object
  return `/catalog/brand/${this._id}`;
});

module.exports = mongoose.model('Brand', BrandSchema);
