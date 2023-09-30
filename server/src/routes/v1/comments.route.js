const express = require('express');
const { commentsController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/:feedbackId')
  .post(auth(), commentsController.createComment)
  .get(commentsController.getComments);

router.route('/:commentId').patch(auth(), commentsController.rateComment);

router.route('/reply/:commentId').post(auth(), commentsController.createReply);

router.route('/reply/:replyId').post(auth(), commentsController.createReply);

module.exports = router;
