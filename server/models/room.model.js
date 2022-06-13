const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  type: String, 
  isFeatured: Boolean, 
  description: String,
  image: String, 
  services: Array, 
  price: String, 
  max: Number, 
  datesBooked: Array
});

[
  // Availiable From
  [
    "2022-06-15",
    "2022-06-18"
  ],
  // Availiable Till
  [
    "2022-06-24",
    "2022-06-30"
  ]
]

[
  // Dates Booked
  [
    [
      "2022-06-15"
    ],
    [
      "2022-06-18"
    ],
    "8"
  ],
  [
    [
      "2022-06-13"
    ],
    [
      "2022-06-15"
    ],
    "2"
  ],
  [
    [
      "2022-06-17"
    ],
    [
      "2022-06-18"
    ],
    "2"
  ]
]

const RoomModel = mongoose.model('room', RoomSchema);
module.exports = RoomModel;