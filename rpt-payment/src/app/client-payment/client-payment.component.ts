import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaintainAccountDialogComponent } from '../maintain-account-dialog/maintain-account-dialog.component';
import { MaintainPayeeDialogComponent } from '../maintain-payee-dialog/maintain-payee-dialog.component';
import { AccountInfoService } from '../_services/account-info.service';
import { BankingAccountInfo } from '../common/model/banking-account-info';
import { UserDataService } from '../_services/user-data.service';
import { UserProfile } from '../common/model/user-profile';
import { ObAccounts } from '../common/model/ob-accounts';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ObBalances } from '../common/model/ob-balances';
import { PartyToParty } from '../common/model/party-to-party';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.scss']
})
export class ClientPaymentComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  selectedDebtAccount: ObAccounts;
  selectedPayee: BankingAccountInfo;
  accountBalance: string;
  payAmount: number;
  newBalance: number;
  paymentType: string;
  recurringPayment: string;
  accountInfo: BankingAccountInfo[];
  accounts: BankingAccountInfo[];
  payees: BankingAccountInfo[];
  obAccounts: ObAccounts[] = [];
  obBalances: ObBalances[] = [];
  user: UserProfile | null;
  selectedBalance: ObBalances[];

  constructor(public dialog: MatDialog, private accountInfoService: AccountInfoService, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getUser()
      .subscribe((user: UserProfile) => {
        this.user = user;
      });

    this.accountInfoService.getAccountInfo()
      .subscribe((account: BankingAccountInfo[]) => {
        this.accountInfo = account;
        this.payees = this.accountInfo.filter(accountList => accountList.accountType === 'Payee');
      });

    // new open banking api link
    this.getObAccounts();

    this.accountInfoService.getObBalances()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: ObBalances[]) => {
        this.obBalances = res;
      });
  }

  getObAccounts() {
    this.accountInfoService.getObAccounts(this.user.accountHolderId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.obAccounts = res;
      });
  }


  public udpateAccountData(event) {
    this.selectedDebtAccount = event.source.value;
    if (this.selectedDebtAccount !== null) {
      this.selectedBalance = this.obBalances.filter(balance => (balance.AccountId === this.selectedDebtAccount.AccountId));
      this.accountBalance = this.selectedBalance[0].Amount.Amount;
      // console.log(this.selectedBalance[0].Amount.Amount);
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
    this.newBalance = Number(this.accountBalance) - this.payAmount;
  }

  public editAccountDialog(): void {
    const dialogRef = this.dialog.open(MaintainAccountDialogComponent, {
      width: '450px',
      data: { selectedDebtAccount: this.selectedDebtAccount }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public editPayeeDialog(): void {
    const dialogRef = this.dialog.open(MaintainPayeeDialogComponent, {
      width: '450px',
      data: { selectedPayee: this.selectedPayee }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  submitPayment() {
    console.log('submitting payment');

    let clientPayment = new PartyToParty(
      'ACME412', 'FRESCO.21302.GFX.20', String(this.payAmount), this.selectedDebtAccount.Currency,
      'UK.OBIE.SortCodeAccountNumber', '80200110203345', 'DaName', '00021',
      'CaSchemeName', 'CaIdentification', 'CaName', 'CaSecondaryIdentificaiton',
      'FRESCO-101', 'Internal ops code 5120101');
    console.log(clientPayment);
    this.accountInfoService.savePartyToPartyPmt(clientPayment).subscribe();
    // clientPayment.Initiation.CreditorAccount;
  }

}
