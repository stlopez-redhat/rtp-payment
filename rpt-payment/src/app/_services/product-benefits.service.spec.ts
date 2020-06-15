import { TestBed } from '@angular/core/testing';

import { ProductBenefitsService } from './product-benefits.service';

describe('ProductBenefitsService', () => {
  let service: ProductBenefitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBenefitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
