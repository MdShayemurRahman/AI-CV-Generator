/*import { Address } from "./Address";

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
};*/

import { z } from "zod";
import { PersonalInfoBodySchema } from "../schemas/personalInfoSchema";

export type PersonalInfoDto = z.infer<typeof PersonalInfoBodySchema>;
export type PersonalInfo = PersonalInfoDto & { id: number };
export type CreatePersonalInfoInput = PersonalInfoDto;
export type UpdatePersonalInfo = Partial<PersonalInfoDto>;
