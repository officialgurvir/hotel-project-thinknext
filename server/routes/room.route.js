const Room = require('../controllers/Room');
const RoomModel = require('../models/room.model');
const Router = require('express').Router();

Router.get('/all', Room.all)
Router.get('/get/:id', Room.get);

Router.post('/create', Room.add)


module.exports = Router;