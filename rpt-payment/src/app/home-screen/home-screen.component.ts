import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ProductBenefits } from '../common/model/product-benefits';
import { ProductsDemosService } from '../_services/products-demos.service';
import { ProjectDemo } from '../common/model/project-demo';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  productBenefits: ProductBenefits[];
  productDemos: ProjectDemo | null;

  constructor(private productsDemosService: ProductsDemosService) { }

  ngOnInit() {
    this.productsDemosService.getProductBenefits()
    .subscribe((benefits: ProductBenefits[]) => {
      this.productBenefits = benefits;
    });

    this.productsDemosService.getSelectedDemo()
    .subscribe((projectDemo: ProjectDemo) => {
      this.productDemos = projectDemo;
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
