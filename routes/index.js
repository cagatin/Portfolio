const router = require('express').Router();
const apiRoutes = require('./api');

//attatch api path to api routes
router.use('/api', apiRoutes);

module.exports = router;