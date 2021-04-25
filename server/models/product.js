import mongoose from 'mongoose';
const { Schema } = mongoose;

const reqString = {
    type: String,
    required: true
  };

const notesSchema = new Schema({
    initials: reqString,
    comments: reqString
  }, {
    timestamps: true
  });

const productSchema = new Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      },
      category: reqString,
      productName: reqString,
      // image: reqString,
      productPrice: Number, 
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
  
  export default mongoose.model("Product", productSchema);
  