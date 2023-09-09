import mongoose from 'mongoose';
//This file is acting as a data model for products
const productSchema = new mongoose.Schema(
  {
    //This takes an Object jisme first param defines the schema fields
    //Not assigning _ids as they will be automatically asigned by mongodb/
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    //The second param defines options
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema); //The first argument 'Product' is a string that specifies the name of the collection in MongoDB where documents of this type will be stored.
export default Product;
