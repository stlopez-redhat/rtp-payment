import { UserProfile } from '../../app/common/model/user-profile';

export const SYSTEMUSERS: UserProfile[] = [
  {
    id: '1', title: 'Mr.', accountHolderID: '11111', firstName: 'Kevin', lastName: '', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', email: '', role: 'user'
  },
  {
    id: '2', title: 'Mr.', accountHolderID: '22222', firstName: 'Fred', lastName: '', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', email: '', role: 'user'
  },
  {
    id: '3', title: '', accountHolderID: '33333', firstName: 'Red', lastName: 'Hat', address1: '100 East Davie Street', address2: '',
    city: 'Raleigh', state: 'NC', zipCode: '27601', workPhone: '1-800-733-4281', cellPhone: '',
    email: 'customerservice@redhat.com', role: 'customerService'
  },
  {
    id: '4', title: '', accountHolderID: '44444', firstName: 'Abraham', lastName: 'Lincoln', address1: '', address2: '',
    city: '', state: '', zipCode: '', workPhone: '', cellPhone: '', email: '', role: 'admin'
  }
];
