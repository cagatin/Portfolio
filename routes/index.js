const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//create route for home
router.use('/', homeRoutes);

//attatch api path to api routes
router.use('/api', apiRoutes);

module.exports = router;