import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ProductBenefits } from '../common/model/product-benefits';
import { ProductBenefitsService } from '../_services/product-benefits.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  productBenefits: ProductBenefits[];

  constructor(private productBenefitsService: ProductBenefitsService) { }

  ngOnInit() {
    this.productBenefitsService.getProductBenefits()
    .subscribe((benefits: ProductBenefits[]) => {
      this.productBenefits = benefits;
    });
  }

  public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollLeft -= 200;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollLeft += 200;
  }

  getProductBenefits() {
    return this.productBenefits;
  }
}
