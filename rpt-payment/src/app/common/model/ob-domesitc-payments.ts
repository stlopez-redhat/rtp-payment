export interface ObDomesticPayments {
  DomesticPaymentId: string;
  ConsentId: string;
  CreationDateTime: string;
  Status: string;
  StatusUpdateDateTime: string;
  ExpectedExecutionDateTime: string;
  ExpectedSettlementDateTime: string;
  Refund: {
    Account: {
      SchemeName: string;
      Identification: string;
      Name: string;
      SecondaryIdentification: string;
    }
  };
  Charges: [
    {
      ChargeBearer: string;
      Type: string;
      Amount: {
        Amount: string;
        Currency: string;
      }
    }
  ];
  Initiation: {
    InstructionIdentification: string;
    EndToEndIdentification: string;
    LocalInstrument: string;
    InstructedAmount: {
      Amount: string;
      Currency: string;
    },
    DebtorAccount: {
      SchemeName: string;
      Identification: string;
      Name: string;
      SecondaryIdentification: string;
    },
    CreditorAccount: {
      SchemeName: string;
      Identification: string;
      Name: string;
      SecondaryIdentification: string;
    },
    CreditorPostalAddress: {
      AddressType: string;
      Department: string;
      SubDepartment: string;
      StreetName: string;
      BuildingNumber: string;
      PostCode: string;
      TownName: string;
      CountrySubDivision: string;
      Country: string;
      AddressLine: [];
    },
    RemittanceInformation: {
      Unstructured: string;
      Reference: string;
    },
    SupplementaryData: {
      additionalProp1: {};
    }
  };
  MultiAuthorisation: {
    Status: string;
    NumberRequired: number;
    NumberReceived: number;
    LastUpdateDateTime: string;
    ExpirationDateTime: string;
  };
  Debtor: {
    Name: string;
  };
}
