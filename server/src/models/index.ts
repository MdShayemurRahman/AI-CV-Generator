import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ResumeSchema = new Schema(
  {
    person: {
      type: Schema.Types.ObjectId,
      ref: 'personalInfo',
      required: true,
    },
    skills: {
      type: Schema.Types.ObjectId,
      ref: 'skill',
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Resume', ResumeSchema);
