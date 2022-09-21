const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

//create route for home
router.use('/', homeRoutes);

module.exports = router;