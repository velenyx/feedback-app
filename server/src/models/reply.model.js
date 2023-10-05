const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const replySchema = mongoose.Schema(
  {
    creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users', required: true },
    comment: { type: mongoose.SchemaTypes.ObjectId, ref: 'Comment', required: true },
    reply_to: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users', default: null },
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

replySchema.plugin(toJSON);

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
