import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { PRODUCTOFFERINGS } from '../../assets/data/product-offerings';
import { PROJECTDEMO } from '../../assets/data/redhat-demo';
import { ProjectDemo } from '../common/model/project-demo';

@Injectable({
  providedIn: 'root'
})
export class ProductsDemosService {
  private projectDemo: ProjectDemo | null;
  private projectDemo$ = new BehaviorSubject(this.projectDemo);

  constructor() { }

  getProductDemos() {
    return of(PROJECTDEMO);
  }

  getProductBenefits() {
    return of(PRODUCTOFFERINGS);
  }

  getSelectedDemo() {
    return this.projectDemo$.asObservable();
  }

  setSelectedDemo(projectDemo: ProjectDemo) {
    this.projectDemo = projectDemo;
    this.projectDemo$.next(this.projectDemo);
  }

}

