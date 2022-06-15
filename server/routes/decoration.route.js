const Router = require('express').Router();
const Decoration = require('../controllers/Decoration');

Router.get('/images', Decoration.slider_images);

module.exports = Router;