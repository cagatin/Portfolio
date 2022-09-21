const router = require('express').Router();
const {
    renderHome
} = require('../controllers/homeControllers');

router.route('/')
    .get(renderHome);

module.exports = router;