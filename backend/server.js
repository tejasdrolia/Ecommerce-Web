import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
dotenv.config(); //on calling this the value inside .env file will be loaded in process.env

mongoose
  .connect(process.env.MONGODB_URI) //MONGODB_URI is a variable
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
// test
app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
