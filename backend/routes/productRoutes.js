import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// Fetch all products
// GET/admin/products
// Public
router.get('/', asyncHandler(async (req, res) => {
  console.log("Products");
  const products = await Product.find({});
  res.json(products);
}));

// Fetch each product
// GET/admin/products/:id
// Public
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found!");
  }
}));

router.post('/admin/products', asyncHandler(async (req, res) => {
  res.send('Product successfully added!');
  try {
    const product = await Product.add({ productId: req.product.id, ...req.body });
      product.save().then(product => res.json(product));
      } catch (error) {
        res.status(404);
        res.send('Product not added!');
    }
}));




export default router;
