import mongoose from 'mongoose';

const todoSchema = new mongoose.schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'users',
    },
    sub_todo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: 'sub_todo',
      },
    ], // Arry of sub_todo
  },
  { timestamps: true }
);

export const todo = mongoose.model('todo', todoSchema);
