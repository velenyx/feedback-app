const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const commentSchema = mongoose.Schema(
  {
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    targetId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    text: { type: String, required: true },
    replies_count: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

commentSchema.plugin(toJSON);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
