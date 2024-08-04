import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    specilizedIn: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const hospital = mongoose.model('hospital', hospitalSchema);
