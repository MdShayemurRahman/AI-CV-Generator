import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  personInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PersonInfo',
    required: true,
  },
  skills: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' },
  educations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education' }],
  experiences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

const PersonWithOptionalFields = mongoose.model('ResumeSchema', ResumeSchema);

// // Define schemas for each entity
// const personInfoSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   address: { type: String },
//   about: { type: String },
// });

// const skillSchema = new mongoose.Schema({
//   technicalSkills: [{ type: String }],
//   softSkills: [{ type: String }],
// });

// const educationSchema = new mongoose.Schema({
//   institution: { type: String },
//   degree: { type: String },
//   // ... other relevant fields for education
// });

// const experienceSchema = new mongoose.Schema({
//   company: { type: String },
//   position: { type: String },
//   // ... other relevant fields for experience
// });

// const projectSchema = new mongoose.Schema({
//   title: { type: String },
//   description: { type: String },
//   // ... other relevant fields for projects
// });

// Create models based on the schemas
// const PersonInfo = mongoose.model('PersonInfo', personInfoSchema);
// const Skill = mongoose.model('Skill', skillSchema);
// const Education = mongoose.model('Education', educationSchema);
// const Experience = mongoose.model('Experience', experienceSchema);
// const Project = mongoose.model('Project', projectSchema);

// Define relationships between entities
