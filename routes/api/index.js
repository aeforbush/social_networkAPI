const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('../api');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;

