import mongoose from 'mongoose';

const medical_recordSchema = mongoose.schema({}, { timestamps: true });

export const medical_record = mongoose.model(
  'mdeical_record',
  medical_recordSchema
);

