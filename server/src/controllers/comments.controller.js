const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentsService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  const comment = await commentsService.createComment({
    ...req.body,
    creator: req.user,
    target_id: req.params.targetId
  });
  res.status(httpStatus.CREATED).send(comment);
});

const getCommentsByFeedbackId = catchAsync(async (req, res) => {
  const comments = await commentsService.getCommentsByFeedbackId(req.params.targetId);
  res.status(httpStatus.CREATED).send(comments);
});

const rateComment = catchAsync(async (req, res) => {
  const ratedComment = await commentsService.rateComment(req.params.commentId, req.query.rateType);
  res.status(httpStatus.CREATED).send(ratedComment);
});

const createReply = catchAsync(async (req, res) => {
  const reply = await commentsService.createReply(
    { ...req.body, creator: req.user },
    req.params.id
  );
  res.status(httpStatus.CREATED).send(reply);
});

const rateReply = catchAsync(async (req, res) => {
  const ratedReply = await commentsService.rateReply(req.params.id, req.query.rateType);
  res.status(httpStatus.CREATED).send(ratedReply);
});

module.exports = {
  createComment,
  getCommentsByFeedbackId,
  rateComment,
  createReply,
  rateReply
};
