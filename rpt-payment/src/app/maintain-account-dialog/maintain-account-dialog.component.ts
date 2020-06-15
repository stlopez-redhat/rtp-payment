import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentConfirmation } from '../common/model/payment-confirmation';

@Component({
  templateUrl: './maintain-account-dialog.component.html',
  styleUrls: ['./maintain-account-dialog.component.scss']
})
export class MaintainAccountDialogComponent implements OnInit {
  paymentConfirmation: PaymentConfirmation[];
  searchText: string;

  constructor(public dialogRef: MatDialogRef<MaintainAccountDialogComponent>,
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
