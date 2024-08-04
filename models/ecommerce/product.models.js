import { Timestamp } from 'bson';
import mongoose, { mongo } from 'mongoose';

const productSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    catogery: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'catogery',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'user',
      
    },
  },
  { Timestamp: true }
);

export const product = mongoose.model('product', productSchema);
