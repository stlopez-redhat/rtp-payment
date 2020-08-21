export interface ObTransactions {
  Transaction: [
    {
      AccountId: string;
      TransactionId: string;
      TransactionReference: string;
      StatementReference: [];
      CreditDebitIndicator: string;
      Status: string;
      TransactionMutability: string;
      BookingDateTime: string;
      ValueDateTime: string;
      TransactionInformation: string;
      AddressLine: string;
      Amount: {
        Amount: string;
        Currency: string;
      },
      ChargeAmount: {
        Amount: string;
        Currency: string;
      },
      CurrencyExchange: {
        SourceCurrency: string;
        TargetCurrency: string;
        UnitCurrency: string;
        ExchangeRate: string;
        ContractIdentification: string;
        QuotationDate: string;
        InstructedAmount: string;
      },
      BankTransactionCode: {
        Code: string;
        SubCode: string;
      },
      ProprietaryBankTransactionCode: {
        Code: string;
        Issuer: string;
      },
      Balance: {
        CreditDebitIndicator: string;
        Type: string;
        Amount: {
          Amount: string;
          Currency: string;
        }
      },
      MerchantDetails: {
        MerchantName: string;
        MerchantCategoryCode: string;
      },
      CreditorAgent: {
        SchemeName: string;
        Identification: string;
        Name: string;
        PostalAddress: string;
      },
      CreditorAccount: {
        SchemeName: string;
        Identification: string;
        Name: string;
        SecondaryIdentification: string;
      },
      DebtorAgent: {
        SchemeName: string;
        Identification: string;
        Name: string;
        PostalAddress: string;
      },
      DebtorAccount: {
        SchemeName: string;
        Identification: string;
        Name: string;
        SecondaryIdentification: string;
      },
      CardInstrument: {
        CardSchemeName: string;
        AuthorisationType: string;
        Name: string;
        Identification: string;
      },
      SupplementaryData: {}
    }
  ]
}
