const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const crypto = require('crypto');

const redis = require('./config/redis');

mongoose.connect('mongodb://localhost:27017/hotel');

app.use(
  cors(
    {
      origin: '*',
      methods: ['GET', 'POST', 'UPDATE', 'DELETE']
    }
  )
);

// rooms/:id -> rooms/123 -> req.params.id = 123
// rooms/:uid -> rooms/123 -> req.params.uid = 123

// Data 1 -> 10000 clients
// Data 2 -> 5 clients

app.get('/set/:id', async function (req, res) {
  const { id } = req.params;

  await redis.set('rooms-' + id, crypto.randomBytes(6).toString('hex'), {
    EX: 10
  });

  res.end();
});

app.get('/get/:id', async function (req, res) {
  const id = await redis.get('rooms-' + req.params.id);

  if (!id) return res.send('Invalid Key');
  else res.send(id);
});

app.listen(process.env.PORT || 5000, async () => {
  
});