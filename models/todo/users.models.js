import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const usersSchema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, 'password is required to login'],
    },
  },
  { Timestamps: true }
);

export const users = mongoose.model(' users ', usersSchema);
