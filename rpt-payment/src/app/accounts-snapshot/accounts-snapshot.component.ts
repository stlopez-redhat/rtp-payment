import { Component, OnInit } from '@angular/core';
import { AccountInfoService } from '../_services/account-info.service';
import { BankingAccountInfo } from '../common/model/banking-account-info';
import { UserProfile } from '../common/model/user-profile';
import { UserDataService } from '../_services/user-data.service';

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
  user: UserProfile | null;

  constructor(private accountInfoService: AccountInfoService, private userDataService: UserDataService) { }

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
  }

  accountSelected($event) {
  }

  calculateBalance() {}

}
