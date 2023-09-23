const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { feedbackService } = require('../services');
const ApiError = require('../utils/ApiError');

const createFeedback = catchAsync(async (req, res) => {
  const feedback = await feedbackService.createFeedback({
    ...req.body,
    user: req.user
  });
  res.status(httpStatus.CREATED).send(feedback);
});

const getFeedback = catchAsync(async (req, res) => {
  const feedback = await feedbackService.getFeedbackById(req.params.feedbackId);
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback not found');
  }
  res.status(httpStatus.CREATED).send(feedback);
});

const getFeedbackByCategory = catchAsync(async (req, res) => {
  const feedbacks = await feedbackService.getFeedbackByCategory(req.query.category);
  res.status(httpStatus.OK).send(feedbacks);
});

module.exports = {
  createFeedback,
  getFeedback,
  getFeedbackByCategory
};
