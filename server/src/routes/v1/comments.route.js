const express = require('express');
const { commentsController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/:feedbackId').post(auth(), commentsController.createComment);
router.route('/reply/:commentId').post(auth(), commentsController.createReply);

module.exports = router;
