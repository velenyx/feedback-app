const express = require('express');
const { commentsController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/:targetId')
  .post(auth(), commentsController.createComment)
  .patch(auth(), commentsController.rateComment)
  .get(commentsController.getCommentsByTargetId);



router
  .route('/reply/:id')
  .get(commentsController.getRepliesByCommentId)
  .post(auth(), commentsController.createReply)
  .patch(auth(), commentsController.rateReply);

module.exports = router;
