const router = require('express').Router();

// render the homepage
const renderHome = async function (req, res) {
    res.render('homepage');
}

module.exports = {
    renderHome
}