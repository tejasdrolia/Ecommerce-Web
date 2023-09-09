import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import data from '../data.js';

const seedRouter = express.Router(); //This line creates an Express router instance named seedRouter

seedRouter.get('/', async (req, res) => {
  //above first param is the path, second is the callback function
  await Product.deleteMany({}); //clear out existing product data before inserting new data.
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
