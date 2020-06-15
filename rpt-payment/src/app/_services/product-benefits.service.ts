import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PRODUCTOFFERINGS } from '../../assets/data/product-offerings';

@Injectable({
  providedIn: 'root'
})
export class ProductBenefitsService {

  // constructor( private http: HttpClient) { }

  getProductBenefits() {
    return of(PRODUCTOFFERINGS);
  }
}
