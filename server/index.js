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

app.get('/get/slider_images', async function (req, res) {
  return res.send([
    {
      heading: 'Welcome to Hotel.com',
      subheading: 'Live your Myth in greece',
      url: 'https://demo.zantetheme.com/wp-content/uploads/2018/02/slider-1.jpg'
    },
    {
      heading: 'ENJOY YOUR HOLIDAYS',
      subheading: 'Navagio Beach',
      url: 'https://demo.zantetheme.com/wp-content/uploads/2018/04/slider-3.jpg'
    },
    {
      heading: 'TOUCH THE DREAM',
      subheading: 'Family Room for $29 per night',
      url: 'https://demo.zantetheme.com/wp-content/uploads/2018/04/slider-2.jpg',
    },
    {
      heading: 'Amazing Nature',
      subheading: 'MiniGoa',
      url: 'https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2020/04/ca-9.jpg?x59658'
    },
    {
      heading: 'Explore Greece',
      subheading: 'undefined',
      url: 'https://www.eventstodayz.com/wp-content/uploads/2018/04/beautiful-nature-wallpaper.jpg'
    }
  ]);
});

app.listen(process.env.PORT || 3001, async () => {
  console.log('Server Running on PORT: ' + (process.env.PORT || 3001))
});