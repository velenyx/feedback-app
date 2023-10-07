const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentsService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  const comment = await commentsService.createComment({
    ...req.body,
    creator: req.user,
    targetId: req.params.targetId
  });
  res.status(httpStatus.CREATED).send(comment);
});

const getCommentsByTargetId = catchAsync(async (req, res) => {
  const comments = await commentsService.getCommentsByTargetId(req.params.targetId);
  res.status(httpStatus.CREATED).send(comments);
});

const rateComment = catchAsync(async (req, res) => {
  const ratedComment = await commentsService.rateComment(req.params.targetId, req.query.rateType);
  res.status(httpStatus.CREATED).send(ratedComment);
});

const getRepliesByCommentId = catchAsync(async (req, res) => {
  const replies = await commentsService.getRepliesByCommentId(req.params.id);
  res.status(httpStatus.OK).send(replies);
});

const createReply = catchAsync(async (req, res) => {
  console.log(req.user);
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
  getCommentsByTargetId,
  rateComment,
  getRepliesByCommentId,
  createReply,
  rateReply
};
