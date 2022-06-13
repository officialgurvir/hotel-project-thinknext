const mongoose = require('mongoose');

const connectToMongoDB = async function (connection_string) {
  return mongoose.connect(connection_string);
}

module.exports = {
  connectToMongoDB
}