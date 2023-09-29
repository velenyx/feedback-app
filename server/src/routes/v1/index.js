const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const feedbackRoute = require('./feedback.route');
const commentsRoute = require('./comments.route');
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
  },
  {
    path: '/comments',
    route: commentsRoute
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

router.use('/live', (req, res) => {
  res.status(200).send({ status: true });
});

module.exports = router;
