import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Address = new Schema({
  street_addr: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const PersonalInfoSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone_no: {
      type: String,
    },
    linkedin_profile: {
      type: String,
    },
    personal_website: {
      type: String,
    },
    address: {
      type: Address,
    },
    headline: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('personalInfo', PersonalInfoSchema);
