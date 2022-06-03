const express = require('express');
const axios = require('axios');
const redis = require('redis');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel');

app.use(
  cors(
    {
      origin: '139.59.77.228',
      methods: ['GET', 'POST', 'UPDATE', 'DELETE']
    }
  )
);

const client = redis.createClient({
  url: 'redis://127.0.0.1:6379'
});

app.get('/hotels', async function (req, res) {
  res.send({})
});

app.listen(process.env.PORT || 5000, async () => {
  client.on('error', console.log);
  await client.connect();
});