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

const getComments = catchAsync(async (req, res) => {
  const comments = await commentsService.getComments(req.params.feedbackId);
  res.status(httpStatus.CREATED).send(comments);
});

const rateComment = catchAsync(async (req, res) => {
  const ratedComment = await commentsService.rateComment(req.params.commentId, req.query.rateType);
  res.status(httpStatus.CREATED).send(ratedComment);
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
  getComments,
  rateComment,
  createReply
};
