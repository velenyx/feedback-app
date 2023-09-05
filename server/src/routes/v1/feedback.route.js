const express = require('express');
const { feedbackController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').post(feedbackController.createFeedback);

router.route('/:feedbackId').get(feedbackController.getFeedback);

router.route('/').get(feedbackController.getFeedbackByCategory);

module.exports = router;
