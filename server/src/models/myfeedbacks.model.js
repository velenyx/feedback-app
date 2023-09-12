const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const myFeedbacks = mongoose.Schema(
  {
    creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users', required: true },
    feedbacks: [
      {
        client: { type: String, required: true },
        category: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

myFeedbacks.plugin(toJSON);

const userFeedbacks = mongoose.model('MyFeedbacks', myFeedbacks);

module.exports = userFeedbacks;
