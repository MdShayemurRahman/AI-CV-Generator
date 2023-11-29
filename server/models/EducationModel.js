import mongoose from "mongoose";
const Schema = mongoose.Schema;
const EducationSchema = new Schema({
    institute: [String],
    degree: [String],
    email: [String],
    graduation_date: [String],
    gpa: [String],
    field_of_study: [String],
}, {
    versionKey: false,
});
export default mongoose.model("Education", EducationSchema);
