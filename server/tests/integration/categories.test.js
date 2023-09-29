const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { insertFeedbacks } = require('../fixtures/categories.fixture');

setupTestDB();

describe('Category routes', () => {
  describe('GET /v1/categories', () => {
    test('should get categories and 200', async () => {
      await insertFeedbacks();
      const res = await request(app)
        .get('/v1/categories')

        .send()
        .expect(httpStatus.OK);

      expect(res.body.length).not.toBe(0);
    });
  });
  describe('POST /v1/categories', () => {
    test('should create category and get 201', async () => {
      const newCategory = {
        category: 'test category'
      };

      const res = await request(app)
        .post('/v1/categories')

        .send(newCategory)
        .expect(httpStatus.CREATED);
      expect(res.body.category).toBe(newCategory.category);
    });
  });
});
