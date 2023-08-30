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

const feedbackSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    category: {
      type: String,
      enum: category,
      required: true,
      default: 'other'
    },
    text: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    views: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

feedbackSchema.plugin(toJSON);

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
