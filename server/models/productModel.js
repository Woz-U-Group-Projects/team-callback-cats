// Product schema with user

import mongoose from 'mongoose';

const reqString = {
  type: String,
  required: true
};

const notesSchema = mongoose.Schema({
  initials: reqString,
  comments: reqString
}, {
  timestamps: true
});

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    category: reqString,
    productName: reqString,
    // image: reqString,
    countInStock: {
      type: Number,
      required: true,
      default: 0
    },
    description: reqString,
    notes: [notesSchema]
  }, {
  timestamps: true
}
);

const Product = mongoose.model("Product", productSchema);

export default Product;