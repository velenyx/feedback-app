const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

categorySchema.plugin(toJSON);

const Category = mongoose.model('Categories', categorySchema);

module.exports = Category;
