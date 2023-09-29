const { feedbackService } = require('.');
const { Comment } = require('../models');

const createComment = async (commentBody) => {
  await feedbackService.incrementFeedbackCommentsCount(commentBody.feedback)
  const comment = await Comment.create(commentBody);
  return comment;
};

module.exports = { createComment };
