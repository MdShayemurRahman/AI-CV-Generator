import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
    person_Id: {
      type: Schema.Types.ObjectId,
      ref: 'personalInfo',
    },
    technical_skills: {
      type: [String],
    },
    soft_skills: {
      type: [String],
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('skill', SkillSchema);
