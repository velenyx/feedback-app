const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users', required: true },
    feedback: { type: mongoose.SchemaTypes.ObjectId, ref: 'Feedbacks', required: true },
    text: { type: String, required: true },
    replies_count: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

commentSchema.plugin(toJSON);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
