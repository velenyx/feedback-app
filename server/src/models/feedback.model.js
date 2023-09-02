const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { categorySchema } = require('./category.model');

const feedbackSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true
    },
    category: {
      type: categorySchema,
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
