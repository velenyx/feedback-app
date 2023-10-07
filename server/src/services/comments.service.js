const httpStatus = require('http-status');
const { Comment, Reply } = require('../models');
const ApiError = require('../utils/ApiError');

const createComment = async (commentBody) => {
  const comment = await Comment.create(commentBody);
  return comment;
};

const getCommentsByTargetId = async (targetId) => {
  const comments = await Comment.find({ targetId }).populate(['creator', 'user']);
  return comments;
};

const rateComment = async (commentId, rateType) => {
  const ratedComment = await Comment.findByIdAndUpdate(
    commentId,
    { $inc: { [rateType]: 1 } },
    { new: true }
  );
  if (!ratedComment) {
    throw new ApiError(httpStatus.NOT_FOUND, "Comment isn't found");
  }
  return ratedComment;
};

const getRepliesByCommentId = async (commentId) => {
  const replies = Reply.find({ comment: commentId })
    .populate(['reply_to', 'user'])
    .populate(['creator', 'user'])
    .exec();
  return replies;
};

const createReply = async (replyBody, commentId) => {
  const comment = await Comment.findByIdAndUpdate(commentId, { $inc: { replies_count: 1 } });
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment is not found!');
  }
  const reply = Reply.create({ ...replyBody, comment: commentId });
  return reply;
};

const rateReply = async (replyId, rateType) => {
  const ratedReply = await Reply.findByIdAndUpdate(replyId, { $inc: { [rateType]: 1 } });
  if (!ratedReply) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reply isn't found");
  }
  return ratedReply;
};

module.exports = {
  createComment,
  getCommentsByTargetId,
  rateComment,
  getRepliesByCommentId,
  createReply,
  rateReply
};
