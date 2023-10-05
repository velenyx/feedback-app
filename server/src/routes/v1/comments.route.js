const express = require('express');
const { commentsController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/:targetId')
  .post(auth(), commentsController.createComment)
  .get(commentsController.getCommentsByFeedbackId);

router.route('/:commentId').patch(auth(), commentsController.rateComment);

router
  .route('/reply/:id')
  .post(auth(), commentsController.createReply)
  .patch(commentsController.rateReply);

module.exports = router;
