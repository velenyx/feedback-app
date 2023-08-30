const express = require('express');
const { feedbackController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').post(auth(), feedbackController.createFeedback);

router.route('/:feedbackId').get(feedbackController.getFeedback);

module.exports = router;
