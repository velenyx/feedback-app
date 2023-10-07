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

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         creator:
 *           type: string
 *           description: The ID of the creator
 *         targetId:
 *           type: string
 *           description: The ID of the target entity
 *         text:
 *           type: string
 *           description: The comment text
 *         replies_count:
 *           type: number
 *           description: Number of replies to the comment
 *         likes:
 *           type: number
 *           description: Number of likes for the comment
 *         dislikes:
 *           type: number
 *           description: Number of dislikes for the comment
 *         createdDate:
 *           type: string
 *           format: date-time
 *           description: The date the comment was created
 *       required:
 *         - creator
 *         - targetId
 *         - text
 *
 *     Reply:
 *       type: object
 *       properties:
 *         creator:
 *           type: string
 *           description: The ID of the creator
 *         comment:
 *           type: string
 *           description: The ID of the parent comment
 *         reply_to:
 *           type: string
 *           description: The ID of the user being replied to (if any)
 *         text:
 *           type: string
 *           description: The reply text
 *         likes:
 *           type: number
 *           description: Number of likes for the reply
 *         dislikes:
 *           type: number
 *           description: Number of dislikes for the reply
 *         createdDate:
 *           type: string
 *           format: date-time
 *           description: The date the reply was created
 *       required:
 *         - creator
 *         - comment
 *         - text
 */
