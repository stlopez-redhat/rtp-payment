import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentConfirmation } from '../common/model/payment-confirmation';


@Component({
  templateUrl: './maintain-payee-dialog.component.html',
  styleUrls: ['./maintain-payee-dialog.component.scss']
})
export class MaintainPayeeDialogComponent implements OnInit {
  paymentConfirmation: PaymentConfirmation[];
  searchText: string;

  constructor(public dialogRef: MatDialogRef<MaintainPayeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public applyFilter() {
    console.log("search");
  }
}
