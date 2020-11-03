import { DeliveryAddress } from './ob-delivery-address';

export class ObRisk {
  PaymentContextCode: string = '';
  MerchantCategoryCode: string = '';
  MerchantCustomerIdentification: string = '';
  DeliveryAddress = new DeliveryAddress();
}
