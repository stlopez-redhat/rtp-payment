import { Component, OnInit } from '@angular/core';
import { UserDataService } from './_services/user-data.service';
import { UserProfile } from './common/model/user-profile';
import { ProductsDemosService } from './_services/products-demos.service';
import { PROJECTDEMO } from '../assets/data/redhat-demo';
import { ProjectDemo } from './common/model/project-demo';

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
  productDemos: ProjectDemo[];
  selectedProject: ProjectDemo;

  constructor(private userDataService: UserDataService, private productsDemosService: ProductsDemosService) { }

  ngOnInit(): void {
    this.userDataService.getSystemUsers()
      .subscribe((userData: UserProfile[]) => {
        this.users = userData;
      });

    this.productsDemosService.getProductDemos()
      .subscribe((demos: ProjectDemo[]) => {
        this.productDemos = demos;
      });
  }

  getUsers() {
    return this.systemUsers;
  }

  setUser($event) {
    this.userDataService.setUser(this.selectedUser);
  }

  setProject($event) {
    this.productsDemosService.setSelectedDemo(this.selectedProject);
  }
}
