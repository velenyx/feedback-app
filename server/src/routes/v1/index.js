const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const feedbackRoute = require('./feedback.route');
const categoryRoute = require('./categories.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

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

/* istanbul ignore next */
// TODO: вернуть на дев
if (config.env !== 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

router.use('/live', (req, res) => {
  res.status(200).send({ status: true });
});

module.exports = router;
