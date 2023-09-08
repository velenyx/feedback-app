const express = require('express');
const { categoryController } = require('../../controllers');
const { categoryValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router
  .route('/')
  .get(categoryController.getCategories)
  .post(validate(categoryValidation.createCategory), categoryController.createCategory);

module.exports = router;
