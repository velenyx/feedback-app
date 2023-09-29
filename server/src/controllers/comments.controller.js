const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { commentsService } = require('../services');

const createComment = catchAsync(async (req, res) => {
  const comment = await commentsService.createComment({
    ...req.body,
    creator: req.user,
    feedback: req.params.commentId
  });
  res.status(httpStatus.CREATED).send(comment);
});

module.exports = {
  createComment
};
