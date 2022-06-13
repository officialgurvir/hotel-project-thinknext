const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const { connectToMongoDB } = require('./utils');
const app = express();

const decorationRoutes = require('./routes/decoration.route');

app.use(
  cors(
    {
      origin: '*',
      methods: ['GET', 'POST', 'UPDATE', 'DELETE']
    }
  )
);

app.use('/api/decoration', decorationRoutes);

app.listen(process.env.PORT || 3001, async () => {
  console.log('Server Running on PORT: ' + (process.env.PORT || 3001))
  connectToMongoDB(process.env.MONGODB_CONNECTION_STRING).then(() => console.log('Connected To MongoDB'));
});