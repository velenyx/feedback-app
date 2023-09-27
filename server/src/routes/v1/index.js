const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const feedbackRoute = require('./feedback.route');
const categoryRoute = require('./categories.route');
const docsRoute = require('./docs.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute
  },
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/feedbacks',
    route: feedbackRoute
  },
  {
    path: '/categories',
    route: categoryRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
