import mongoose from 'mongoose';

const patientSchema = mongoose.schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    BloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      Enum: ['Male', 'Female', 'others'],
      required: true,
    },
    admitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'hospital',
    },
  },
  { timestamps: true }
);

export const patient = mongoose.model('patients', patientSchema);
