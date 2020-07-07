import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaintainAccountDialogComponent } from '../maintain-account-dialog/maintain-account-dialog.component';
import { MaintainPayeeDialogComponent } from '../maintain-payee-dialog/maintain-payee-dialog.component';
import { AccountInfoService } from '../_services/account-info.service';
import { BankingAccountInfo } from '../common/model/banking-account-info';
import { UserDataService } from '../_services/user-data.service';
import { UserProfile } from '../common/model/user-profile';

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
  recurringPayment: string;
  accountInfo: BankingAccountInfo[];
  accounts: BankingAccountInfo[];
  payees: BankingAccountInfo[];
  user: UserProfile | null;

  constructor(public dialog: MatDialog, private accountInfoService: AccountInfoService, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getUser()
    .subscribe((user: UserProfile) => {
      this.user = user;
    });

    this.accountInfoService.getAccountInfo()
    .subscribe((account: BankingAccountInfo[]) => {
      this.accountInfo = account;
    });
    this.accounts = this.accountInfo.filter(account => ((account.accountType !== 'Payee') && (account.userId === this.user.id)));
    this.payees = this.accountInfo.filter(account => account.accountType === 'Payee');
  }

  public udpateAccountData(event) {
    this.selectedDebtAccount = event.source.value;
    if (this.selectedDebtAccount !== null) {
      this.accountBalance = this.selectedDebtAccount.balance;
    } else {
      this.accountBalance = null;
    }
    this.payAmount = null;
    this.newBalance = null;
    this.paymentType = null;
    this.recurringPayment = null;
    this.selectedPayee = null;
  }

  public calculateBalance() {
    this.newBalance = this.accountBalance - this.payAmount;
  }

  public editAccountDialog(): void {
    const dialogRef = this.dialog.open(MaintainAccountDialogComponent, {
      width: '450px',
      data: {selectedDebtAccount: this.selectedDebtAccount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public editPayeeDialog(): void {
    const dialogRef = this.dialog.open(MaintainPayeeDialogComponent, {
      width: '450px',
      data: {selectedPayee: this.selectedPayee}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
