const express = require('express');
const { commentsController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/:commentId').post(auth(), commentsController.createComment);

module.exports = router;
