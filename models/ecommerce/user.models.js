import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: false,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestms: true }
);

export const user = mongoose.model('user', userSchema);
