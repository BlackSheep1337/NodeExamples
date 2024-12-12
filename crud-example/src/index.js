const express = require('express');

const productRoute = require('./routes/product.route.js');
const connectDB = require('./config/db.js');

require('dotenv').config();

//instances
const app = express(); 

//DB connection
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

app
  .listen(8080)
  .on('listening', () => console.log('Server runing on port:8080'));
