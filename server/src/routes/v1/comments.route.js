const express = require('express');
const { commentsController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { commentOrReplyValidation } = require('../../validations');

const router = express.Router();

router
  .route('/:targetId')
  .post(
    auth(),
    validate(commentOrReplyValidation.createComemntOrReply),
    commentsController.createComment
  )
  .patch(auth(), commentsController.rateComment)
  .get(commentsController.getCommentsByTargetId);

router
  .route('/reply/:id')
  .get(commentsController.getRepliesByCommentId)
  .post(
    auth(),
    validate(commentOrReplyValidation.createComemntOrReply),
    commentsController.createReply
  )
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

/**
 * @swagger
* paths:
*   /comments/{targetId}:
*     post:
*       tags:
*         - Comments
*       summary: Create a comment
*       security:
*         - bearerAuth: []
*       description: Create a new comment for a specific target
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Comment'
*       parameters:
*         - in: path
*           name: targetId
*           description: ID of the target entity
*           required: true
*           type: string
*       responses:
*         '201':
*           description: Created
*           schema:
*             $ref: '#/definitions/Comment'
*         '400':
*           description: Bad request
*         '401':
*           description: Unauthorized
*         '500':
*           description: Internal Server Error
 *     patch:
 *       tags:
 *         - Comments
 *       summary: Rate a comment
 *       security:
 *         - bearerAuth: []
 *       description: Rate a comment (like or dislike)
 *       parameters:
 *         - in: path
 *           name: targetId
 *           description: ID of the comment to be rated
 *           required: true
 *           type: string
 *         - in: query
 *           name: rateType
 *           description: Type of rating (e.g., 'likes' or 'dislikes')
 *           required: true
 *           schema:
 *             type: string
 *             enum: ['likes', 'dislikes']
 *       responses:
 *         '201':
 *           description: Updated
 *           schema:
 *             $ref: '#/definitions/Comment'
 *         '400':
 *           description: Bad request
 *         '401':
 *           description: Unauthorized
 *         '404':
 *           description: Comment not found
 *         '500':
 *           description: Internal Server Error
*     get:
*       tags:
*         - Comments
*       summary: Get comments by target ID
*       description: Get all comments for a specific target
*       parameters:
*         - in: path
*           name: targetId
*           description: ID of the target entity
*           required: true
*           type: string
*       responses:
*         '200':
*           description: OK
*           schema:
*             type: array
*             items:
*               $ref: '#/definitions/Comment'
*         '400':
*           description: Bad request
*         '401':
*           description: Unauthorized
*         '500':
*           description: Internal Server Error

*   /comments/reply/{id}:
*     get:
*       tags:
*         - Replies
*       summary: Get replies by comment ID
*       description: Get all replies for a specific comment
*       parameters:
*         - in: path
*           name: id
*           description: ID of the comment
*           required: true
*           type: string
*       responses:
*         '200':
*           description: OK
*           schema:
*             type: array
*             items:
*               $ref: '#/definitions/Reply'
*         '400':
*           description: Bad request
*         '401':
*           description: Unauthorized
*         '500':
*           description: Internal Server Error

*     post:
*       tags:
*         - Replies
*       summary: Create a reply
*       description: Create a new reply for a specific comment
*       security:
*         - bearerAuth: []
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Comment'
*       parameters:
*         - in: path
*           name: id
*           description: ID of the comment
*           required: true
*           type: string
*       responses:
*         '201':
*           description: Created
*           schema:
*             $ref: '#/definitions/Reply'
*         '400':
*           description: Bad request
*         '401':
*           description: Unauthorized
*         '500':
*           description: Internal Server Error
*     patch:
*       tags:
*         - Replies
*       summary: Rate a reply
*       security:
*         - bearerAuth: []
*       description: Rate a reply by providing the reply ID and rate type.
*       parameters:
*         - in: path
*           name: id
*           description: ID of the reply
*           required: true
*           schema:
*             type: string
*         - in: query
*           name: rateType
*           description: Type of rating (e.g., 'likes', 'dislikes')
*           required: true
*           schema:
*             type: string
*       responses:
*         '200':
*           description: OK
*           content:
*             application/json:
*               schema:
*                 $ref: '#/definitions/Reply'
*         '400':
*           description: Bad request
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Error'
*         '401':
*           description: Unauthorized
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Error'
*         '404':
*           description: Reply not found
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Error'
*         '500':
*           description: Internal Server Error
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Error'
* definitions:
*   Comment:
*     type: object
*     properties:
*       creator:
*         type: string
*         description: The ID of the creator
*       targetId:
*         type: string
*         description: The ID of the target entity
*       text:
*         type: string
*         description: The comment text
*       replies_count:
*         type: number
*         description: Number of replies to the comment
*       likes:
*         type: number
*         description: Number of likes for the comment
*       dislikes:
*         type: number
*         description: Number of dislikes for the comment
*       createdDate:
*         type: string
*         format: date-time
*         description: The date the comment was created
*     required:
*       - creator
*       - targetId
*       - text

*   Reply:
*     type: object
*     properties:
*       creator:
*         type: string
*         description: The ID of the creator
*       comment:
*         type: string
*         description: The ID of the parent comment
*       reply_to:
*         type: string
*         description: The ID of the user being replied to (if any)
*       text:
*         type: string
*         description: The reply text
*       likes:
*         type: number
*         description: Number of likes for the reply
*       dislikes:
*         type: number
*         description: Number of dislikes for the reply
*       createdDate:
*         type: string
*         format: date-time
*         description: The date the reply was created
*     required:
*       - creator
*       - comment
*       - text
*/
