export class ObAccountsData {
  AccountId: string;
  Status: boolean;
  StatusUpdateDateTime: string;
  Currency: string;
  AccountType: string;
  AccountSubType: string;
  Nickname: string;
  OpeningDate: string;
  Account: [
    {
      SchemeName: string;
      Identification: string;
      Name: string;
      SecondaryIdentification: string;
    }
  ];
}
