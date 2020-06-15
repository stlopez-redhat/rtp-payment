import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BANKACCOUNTS } from '../../assets/data/banking-account-data';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

constructor() { }

  getAccountInfo() {
    return of(BANKACCOUNTS);
  }

}
