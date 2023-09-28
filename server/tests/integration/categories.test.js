const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const config = require('../../src/config/config');
const setupTestDB = require('../utils/setupTestDB');
const { insertFeedbacks } = require('../fixtures/categories.fixture');
const { userOneAccessToken, adminAccessToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('Category routes', () => {
  describe('GET /v1/categories', () => {
    test('should get categories and 200', async () => {
      await insertFeedbacks();
      const res = await request(app)
        .get('/v1/categories')

        .send()
        .expect(httpStatus.OK);

      expect(res.body[0].category).toBe('freelance');
    });
  });
});
