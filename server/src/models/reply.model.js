const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const replySchema = mongoose.Schema(
  {
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    comment: { type: mongoose.SchemaTypes.ObjectId, ref: 'Comment', required: true },
    reply_to: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

replySchema.plugin(toJSON);

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
