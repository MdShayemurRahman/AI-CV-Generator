import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Address = new Schema({
  street_addr: [String],
  city: [String],
  country: [String],
});

const PersonalInfoSchema = new Schema(
  {
    first_name: [String],
    last_name: [String],
    email: [String],
    phone_no: [String],
    linkedin_profile: [String],
    personal_website: [String],
    address: Address,
    headline: [String],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("personalInfo", PersonalInfoSchema);
