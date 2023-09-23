const express = require('express');
const { feedbackController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').post(auth(), feedbackController.createFeedback);

router.route('/:feedbackId').patch(feedbackController.incrementFeedbackViewsCount);
router.route('/rate/:feedbackId').patch(feedbackController.rateFeedback);

router.route('/:feedbackId').get(feedbackController.getFeedback);

router.route('/').get(feedbackController.getFeedbackByCategory);

module.exports = router;
