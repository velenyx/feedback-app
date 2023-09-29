const { feedbackService } = require('.');
const { Comment, Reply } = require('../models');

const createComment = async (commentBody) => {
  await feedbackService.incrementFeedbackCommentsCount(commentBody.feedback);
  const comment = await Comment.create(commentBody);
  return comment;
};

const createReply = async (replyBody, commentId) => {
  const reply = Reply.create({ ...replyBody, comment: commentId });
  return reply;
};

module.exports = { createComment, createReply };
