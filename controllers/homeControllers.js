const router = require('express').Router();
const Project = require('../models/Project');

// render the homepage
const renderHome = async function (req, res) {
    res.render('homepage');
}

module.exports = {
    renderHome
}