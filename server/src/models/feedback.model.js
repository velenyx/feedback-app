const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const feedbackSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    category: {
      type: String,
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
    },
    rating: { type: Number, default: 0 }
  },

  { timestamps: true }
);

feedbackSchema.plugin(toJSON);
feedbackSchema.plugin(paginate);

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
