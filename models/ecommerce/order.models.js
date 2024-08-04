import mongoose, { SchemaTypes } from 'mongoose';

const orderItemSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    reference: 'product',
  },
});

const orderSchema = mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'user',
    },
    oderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const oders = mongoose.model('order', orderSchema);
export const orderitems = mongoose.model('orderItems', orderItemSchema);
