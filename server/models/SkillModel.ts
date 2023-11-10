import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
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

export default mongoose.model('Skill', SkillSchema);
