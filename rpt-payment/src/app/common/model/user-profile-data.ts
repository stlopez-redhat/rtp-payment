import { UserProfile } from './user-profile';

export class UserProfileData implements UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  accountHolderID: string;
  title: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  workPhone: string;
  cellPhone: string;
  email: string;
  role: string;

}
