const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const category = [
  'targeting',
  'copyrighting',
  'development',
  'development',
  'seo',
  'it_services',
  'marketing',
  'advertising',
  'smm',
  'design',
  'training',
  'beauty_health',
  'sales',
  'tourism_recreation',
  'sport',
  'cleaning',
  'tattoo',
  'repair',
  'construction',
  'nanny',
  'other'
];

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: category,
      required: true,
      default: 'other'
    }
  },
  { timestamps: true }
);

categorySchema.plugin(toJSON);

const Category = mongoose.model('Categories', categorySchema);

module.exports = Category;
