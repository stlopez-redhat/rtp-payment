import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  displayedColumns: string[] = ['payee', 'amount', 'date', 'tags'];
  searchText: string;
  dataSource = new MatTableDataSource<PaymentHistory>(PAYMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  public applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface PaymentHistory {
  payee: string;
  amount: number;
  date: string;
  tags: string;
}

const PAYMENT_DATA: PaymentHistory[] = [
  {payee: '1', amount: 123, date: '5/20/2020', tags: 'sample text'},
  {payee: '2', amount: 12223, date: '1/20/2020', tags: 'find me'},
  {payee: '3', amount: 783, date: '2/20/2020', tags: 'find text'},
  {payee: '4', amount: 23.20, date: '3/20/2020', tags: 'sample text'},
  {payee: '5', amount: 13, date: '4/20/2020', tags: 'sample text'},
  {payee: '6', amount: 389, date: '6/20/2020', tags: 'sample text'},
  {payee: '7', amount: 3, date: '7/10/2020', tags: 'look'},
  {payee: '8', amount: 54, date: '8/15/2020', tags: 'sample text'},
  {payee: '9', amount: 7.89, date: '9/2/2020', tags: 'sample text'},
  {payee: '10', amount: 123, date: '5/10/2020', tags: 'sample text'},
];
