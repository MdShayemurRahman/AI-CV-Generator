import { Address } from "./Address";

export type PersonalInfo = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  linkedin_profile: string;
  personal_website: string;
  address: Address;
  headline: string;
};
