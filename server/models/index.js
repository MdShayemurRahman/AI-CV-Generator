import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
    person: {
        type: Schema.Types.ObjectId,
        ref: 'personalInfo',
        required: true,
    },
    skills: {
        type: Schema.Types.ObjectId,
        ref: 'skill',
    },
}, {
    versionKey: false,
});
export default mongoose.model('Resume', ResumeSchema);
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
