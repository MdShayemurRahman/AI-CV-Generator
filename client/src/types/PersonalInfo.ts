export interface PersonalInfo {
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  linkedin_profile: string;
  personal_website: string;
  address: Address;
  headline: string;
}

interface Address {
  street_addr: string;
  city: string;
  country: string;
}