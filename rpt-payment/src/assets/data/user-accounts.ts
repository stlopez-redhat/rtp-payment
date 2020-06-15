import { UserProfile } from '../../app/common/model/user-profile';

export const SYSTEMUSERS: UserProfile[] = [
  {
    id: '1', firstName: 'Jane', lastName: 'Doe', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', role: 'user'
  },
  {
    id: '2', firstName: 'Billy', lastName: 'Kid', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', role: 'user'
  },
  {
    id: '3', firstName: 'Red', lastName: 'Hat', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', role: 'customerService'
  },
  {
    id: '3', firstName: 'Abraham', lastName: 'Lincoln', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', role: 'admin'
  }
];
