import mongoose, { Types } from 'mongoose';

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        reference: 'hospital',
      },
    ],
  },
  { timestamps: true }
);

export const doctor = mongoose.model('doctor', doctorSchema);
