import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SYSTEMUSERS } from '../../assets/data/user-accounts';
import { UserProfile } from '../common/model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user: UserProfile;

  constructor() { }

  getSystemUsers() {
    return of(SYSTEMUSERS);
  }


  getUser() {
    console.log(this.user);
    return of(this.user);
  }

  setUser(user: UserProfile) {
    this.user = user;
    console.log(this.user);
  }

}
