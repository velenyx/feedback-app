const express = require('express');
const categoryController = require('../../controllers/category.controller');
const auth = require('../../middlewares/auth');
const { Category } = require('../../models');

const router = express.Router();



router.route('/').get(categoryController.getCategories);

module.exports = router;
