import mongoose from 'mongoose';

const catogerySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const catogery = mongoose.model('catogery', catogerySchema);
