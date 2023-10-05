const express = require('express');
const { feedbackController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { feedbackValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(auth(), feedbackController.createFeedback)
  .get(validate(feedbackValidation.getFeedbacks), feedbackController.getFeedbacks);

router
  .route('/:feedbackId')
  .patch(feedbackController.incrementFeedbackViewsCount)
  .get(feedbackController.getFeedback)
  .delete(auth(), feedbackController.deleteFeedback);
router
  .route('/rate/:feedbackId')
  .patch(auth(), validate(feedbackValidation.rateFeedback), feedbackController.rateFeedback);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Feedback:
 *       type: object
 *       properties:
 *         client:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             phone:
 *               type: string
 *             country:
 *               type: string
 *             email:
 *               type: string
 *             social_links:
 *               type: array
 *               items:
 *                 type: string
 *         category:
 *           type: string
 *         text:
 *           type: string
 *         user:
 *           type: string
 *
 *         views:
 *           type: number
 *         rating:
 *           type: number
 *         rating_counts:
 *           type: object
 *           properties:
 *             1:
 *               type: number
 *             2:
 *               type: number
 *             3:
 *               type: number
 *             4:
 *               type: number
 *             5:
 *               type: number
 *         created_date:
 *           type: string
 *           format: date-time
 */
/**
 * @swagger
 * /feedbacks:
 *   post:
 *     summary: Create a new feedback
 *     tags: [Feedback]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Feedback'
 *   get:
 *     summary: Get feedbacks by category
 *     tags: [Feedback]
 *     parameters:
 *       - name: category
 *         in: query
 *         required: true
 *         description: Feedback category
 *         schema:
 *           type: string
 *       - name: sortBy
 *         in: query
 *         required: true
 *         description: Sorting critery
 *         schema:
 *           type: string
 *       - name: order
 *         in: query
 *         required: true
 *         description: Sorting order
 *         schema:
 *           type: string
 *           enum:
 *           - asc
 *           - desc
 *       - name: page
 *         in: query
 *         required: true
 *         description: Current page
 *         schema:
 *           type: number
 *       - name: pageSize
 *         in: query
 *         required: true
 *         description: Page size
 *         schema:
 *           type: number
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Feedback'
 */

/**
 * @swagger
 * /feedbacks/{feedbackId}:
 *   patch:
 *     summary: Increment feedback views count
 *     tags: [Feedback]
 *     parameters:
 *       - name: feedbackId
 *         in: path
 *         required: true
 *         description: ID of the feedback
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Feedback'
 *   get:
 *     summary: Get feedback by ID
 *     tags: [Feedback]
 *     parameters:
 *       - name: feedbackId
 *         in: path
 *         required: true
 *         description: ID of the feedback
 *         schema:
 *           type: string
 *
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Feedback'
 *   delete:
 *     summary: Delete feedback
 *     tags: [Feedback]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: feedbackId
 *         in: path
 *         required: true
 *         description: ID of the feedback
 *         schema:
 *           type: string
 *
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Feedback'
 */

/**
 * @swagger
 * /feedbacks/rate/{feedbackId}:
 *   patch:
 *     summary: Rate feedback
 *     tags: [Feedback]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: feedbackId
 *         in: path
 *         required: true
 *         description: ID of the feedback
 *         schema:
 *           type: string
 *
 *       - name: rating
 *         in: query
 *         required: true
 *         description: Rating value
 *         schema:
 *           type: integer
 *           format: int32
 *           minimum: 1
 *           maximum: 5
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Feedback'
 */
