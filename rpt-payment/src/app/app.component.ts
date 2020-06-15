import { Component, OnInit } from '@angular/core';
import { UserDataService } from './_services/user-data.service';
import { UserProfile } from './common/model/user-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: UserProfile[];
  title = 'rpt-payment';
  systemUsers: UserProfile;
  selectedUser: UserProfile;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getSystemUsers()
    .subscribe((userData: UserProfile[]) => {
      this.users = userData;
    });
  }

  getUsers() {
    return this.systemUsers;
  }

  setUser(event) {
    this.userDataService.setUser(this.selectedUser);
  }
}
