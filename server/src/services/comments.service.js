const { feedbackService } = require('.');
const { Comment, Reply } = require('../models');

const createComment = async (commentBody) => {
  await feedbackService.incrementFeedbackCommentsCount(commentBody.feedback);
  const comment = await Comment.create(commentBody);
  return comment;
};

const getComments = async (feedbackId) => {
  const comments = await Comment.find({ feedback: feedbackId });
  return comments;
};

const rateComment = async (commentId, rateType) => {
  const ratedComment = await Comment.findByIdAndUpdate(commentId, { $inc: { [rateType]: 1 } });
  return ratedComment;
};

const createReply = async (replyBody, commentId) => {
  const reply = Reply.create({ ...replyBody, comment: commentId });
  return reply;
};

const rateReply = async (replyId, rateType) => {
  const ratedReply = await Reply.findByIdAndUpdate(replyId, { $inc: { [rateType]: 1 } });
  return ratedReply;
};

module.exports = { createComment, getComments, rateComment, createReply, rateReply };
