const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const feedbackSchema = mongoose.Schema(
  {
    client: {
      name: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        defaul: null
      },
      country: {
        type: String,
        default: null
      },
      email: {
        type: String,
        default: null
      },
      social_links: { type: [String], default: [] }
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
    commentsCount: {
      type: Number,
      default: 0
    },
    rating: { type: Number, default: 0 },
    created_date: { type: Date, default: Date.now }
  },

  { timestamps: true }
);

feedbackSchema.plugin(toJSON);
feedbackSchema.plugin(paginate);

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
