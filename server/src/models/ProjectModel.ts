import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    person_Id: {
      type: Schema.Types.ObjectId,
      ref: "personalInfo",
    },
    title: {
      type: [String],
    },
    desc: {
      type: [String],
    },
    duration: {
      type: [String],
    },
    outcomes: {
      type: [String],
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("project", ProjectSchema);
