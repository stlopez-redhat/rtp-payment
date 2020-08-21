import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { ObAccounts } from '../common/model/ob-accounts';
import { BANKACCOUNTS } from '../../assets/data/banking-account-data';
import { ObBalances } from '../common/model/ob-balances';
import { ObTransactions } from '../common/model/ob-transactions';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {
  public first = '';
  public prev = '';
  public next = '';
  public last = '';
  private bankUrl = 'http://localhost:9093/';
  private backEndUrl = "http://debtor-payment-service-rtp-demo.apps.cluster-nyc-e74d.nyc-e74d.example.opentlc.com/";

constructor(private http: HttpClient) { }

  getObAccounts(): Observable<ObAccounts[]>{
      return this.http.get<ObAccounts[]>(this.bankUrl + 'Accounts' );
  // getObAccounts() {
  //   return this.http.get<ObAccounts[]>(this.backEndUrl + 'accounts',
  //     {params: new HttpParams({fromString: '_page=1&_limit=20'}), observe: 'response'})
  //     .pipe(retry(3), catchError(this.handleError), tap(res => {
  //     // console.log(res.headers.get('Link'));
  //     this.parseLinkHeader(res.headers.get('Link'));
  //   }));
  }

  getObBalances(): Observable<ObBalances[]>{
    return this.http.get<ObBalances[]>(this.bankUrl + 'Balances' );
  }

  getObTransactions(): Observable<ObTransactions[]>{
    return this.http.get<ObTransactions[]>(this.bankUrl + 'Transactions' );
  }

  getAccountInfo() {
    return of(BANKACCOUNTS);
  }

  getBalances() {

  }

  parseLinkHeader(header) {
    if (header.length === 0) {
      return ;
    }
    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });

    this.first  = links['first'];
    this.last   = links['last'];
    this.prev   = links['prev'];
    this.next   = links['next'];
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
