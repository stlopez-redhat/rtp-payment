import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaintainAccountDialogComponent } from '../maintain-account-dialog/maintain-account-dialog.component';
import { MaintainPayeeDialogComponent } from '../maintain-payee-dialog/maintain-payee-dialog.component';
import { AccountInfoService } from '../_services/account-info.service';
import { BankingAccountInfo } from '../common/model/banking-account-info';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.scss']
})
export class ClientPaymentComponent implements OnInit {
  selectedDebtAccount: BankingAccountInfo;
  selectedPayee: BankingAccountInfo;
  accountBalance: number;
  payAmount: number;
  newBalance: number;
  paymentType: string;
  accountInfo: BankingAccountInfo[];
  accounts: BankingAccountInfo[];
  payees: BankingAccountInfo[];

  constructor(public dialog: MatDialog, private accountInfoService: AccountInfoService) { }

  ngOnInit(): void {
    this.accountInfoService.getAccountInfo()
    .subscribe((account: BankingAccountInfo[]) => {
      this.accountInfo = account;
    });
    this.accounts = this.accountInfo.filter(account => account.accountType !== 'Payee');
    this.payees = this.accountInfo.filter(account => account.accountType === 'Payee');
  }

  public udpateAccountData(event) {
    this.selectedDebtAccount = event.source.value;
    this.accountBalance = this.selectedDebtAccount.balance;
    this.payAmount = null;
    this.newBalance = null;
    this.paymentType = null;
    this.selectedPayee = null;
  }

  public calculateBalance() {
    this.newBalance = this.accountBalance - this.payAmount;
  }

  public editAccountDialog(): void {
    const dialogRef = this.dialog.open(MaintainAccountDialogComponent, {
      width: '450px',
      data: {paymentAmount: this.payAmount, payeeName: '', accountName: '', newBalance: this.newBalance}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public editPayeeDialog(): void {
    const dialogRef = this.dialog.open(MaintainPayeeDialogComponent, {
      width: '450px',
      data: {paymentAmount: this.payAmount, payeeName: '', accountName: '', newBalance: this.newBalance}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
