const express = require('express');
const { feedbackController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .post(auth(), feedbackController.createFeedback)
  .get(feedbackController.getFeedbackByCategory);

router
  .route('/:feedbackId')
  .patch(feedbackController.incrementFeedbackViewsCount)
  .get(feedbackController.getFeedback);
router.route('/rate/:feedbackId').patch(auth(), feedbackController.rateFeedback);

module.exports = router;
