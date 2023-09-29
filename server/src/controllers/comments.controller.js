const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentsService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  const comment = await commentsService.createComment({
    ...req.body,
    creator: req.user,
    feedback: req.params.feedbackId
  });
  res.status(httpStatus.CREATED).send(comment);
});

const createReply = catchAsync(async (req, res) => {
  const reply = await commentsService.createReply(
    { ...req.body, creator: req.user },
    req.params.commentId
  );
  res.status(httpStatus.CREATED).send(reply);
});

module.exports = {
  createComment,
  createReply
};
