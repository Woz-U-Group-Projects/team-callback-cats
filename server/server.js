// Using ES Modules - see package.json, type: module
// Use npm start when in server file - client folder runs on its own npm start

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/error.js';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
// import adminRoute from './routes/routes-admin.js';

dotenv.config();

// Database connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/admin/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}!`.yellow.bold)
});

