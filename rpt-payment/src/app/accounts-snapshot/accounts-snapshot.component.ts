import { Component, OnInit } from '@angular/core';
import { AccountInfoService } from '../_services/account-info.service';
import { BankingAccountInfo } from '../common/model/banking-account-info';

@Component({
  selector: 'app-accounts-snapshot',
  templateUrl: './accounts-snapshot.component.html',
  styleUrls: ['./accounts-snapshot.component.scss']
})
export class AccountsSnapshotComponent implements OnInit {
  panelOpenState = false;
  payAmount: number;
  accountInfo: BankingAccountInfo[];
  accounts: BankingAccountInfo[];

  constructor(private accountInfoService: AccountInfoService) { }

  ngOnInit(): void {
    this.accountInfoService.getAccountInfo()
    .subscribe((account: BankingAccountInfo[]) => {
      this.accountInfo = account;
    });
    this.accounts = this.accountInfo.filter(account => account.accountType !== 'Payee');
  }

  accountSelected($event) {
  }

  calculateBalance() {}

}
