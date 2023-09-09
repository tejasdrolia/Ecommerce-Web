import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router(); //This line creates an Express router instance named seedRouter

seedRouter.get('/', async (req, res) => {
  //above first param is the path, second is the callback function
  await Product.deleteMany({}); //clear out existing product data before inserting new data.
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts }); //sending result back to the frontend
});

export default seedRouter;
