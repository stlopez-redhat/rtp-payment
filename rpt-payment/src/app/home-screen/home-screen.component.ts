import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ProductBenefits } from '../common/model/product-benefits';
import { ProductsDemosService } from '../_services/products-demos.service';
import { ProjectDemo } from '../common/model/project-demo';
import { UserProfile } from '../common/model/user-profile';
import { UserDataService } from '../_services/user-data.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  productBenefits: ProductBenefits[] | null;
  productDemos: ProjectDemo[] | null;
  productDemo: ProjectDemo | null;
  systemUsers: UserProfile | null;
  selectedUser: UserProfile | null;
  selectedProject: ProjectDemo | null;
  users: UserProfile[] | null;

  constructor(private productsDemosService: ProductsDemosService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getSystemUsers()
      .subscribe((userData: UserProfile[]) => {
        this.users = userData;
      });

    this.productsDemosService.getProductBenefits()
    .subscribe((benefits: ProductBenefits[]) => {
      this.productBenefits = benefits;
    });

    this.productsDemosService.getProductDemos()
      .subscribe((demos: ProjectDemo[]) => {
        console.log(demos);
        this.productDemos = demos;
      });

    this.productsDemosService.getSelectedDemo()
    .subscribe((projectDemo: ProjectDemo) => {
      this.productDemo = projectDemo;
    });
  }

  public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollLeft -= 200;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollLeft += 200;
  }

  getProductBenefits() {
    return this.productBenefits;
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
