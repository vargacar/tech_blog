const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashbodRoutes');
const api = require('./api');

router.use(homeRoutes);
router.use(userRoutes);
router.use(dashboardRoutes);
router.use('/api',api)


module.exports = router;