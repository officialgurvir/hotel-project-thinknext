const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  max_guests: String,
  
});

const RoomModel = mongoose.model('room', RoomSchema);
module.exports = RoomModel;