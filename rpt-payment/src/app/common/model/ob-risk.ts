export interface ObRisk {
  PaymentContextCode: string;
  MerchantCategoryCode: string;
  MerchantCustomerIdentification: string;
  DeliveryAddress: {
    AddressLine: [],
    StreetName: string;
    BuildingNumber: string;
    PostCode: string;
    TownName: string;
    CountySubDivision: [],
    Country: string;
  };
}
