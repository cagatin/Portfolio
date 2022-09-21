const router = require('express').Router();
import apiRoutes from './api';
import homeRoutes from './homeRoutes';

//create route for home
router.use('/', homeRoutes);

//attatch api path to api routes
router.use('/api', apiRoutes);

module.exports = router;