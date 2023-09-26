const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SystemSchema = new Schema({
  name: { type: String, required: true, maxLength: 50 },
});

SystemSchema.virtual('url').get(function () {
  // Dont use arrow function as we'll need the this object
  return `/catalog/system/${this._id}`;
});

module.exports = mongoose.model('System', SystemSchema);
