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
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback does not exist!');
  }
  res.status(httpStatus.CREATED).send(feedback);
});

const getFeedbackByCategory = catchAsync(async (req, res) => {
  const feedbacks = await feedbackService.getFeedbackByCategory({ ...req.query });
  res.status(httpStatus.OK).send(feedbacks);
});

const getMyFeedbacks = catchAsync(async (req, res) => {
  const feedbacks = await feedbackService.getMyFeedbacks(req.user._id, req.query);
  res.status(httpStatus.OK).send(feedbacks);
});

const incrementFeedbackViewsCount = catchAsync(async (req, res) => {
  const updatedFeedback = await feedbackService.incrementFeedbackViewsCount(req.params.feedbackId);
  res.status(httpStatus.OK).send(updatedFeedback);
});

const rateFeedback = catchAsync(async (req, res) => {
  const ratedFeedback = await feedbackService.rateFeedback(req.params.feedbackId, req.query.rating);
  res.status(httpStatus.OK).send(ratedFeedback);
});

const deleteFeedback = catchAsync(async (req, res) => {
  const deletedFeedback = await feedbackService.deleteFeedback(req.params.feedbackId, req.user);
  res.status(httpStatus.OK).send(deletedFeedback);
});

module.exports = {
  createFeedback,
  getFeedback,
  getFeedbackByCategory,
  getMyFeedbacks,
  incrementFeedbackViewsCount,
  rateFeedback,
  deleteFeedback
};
