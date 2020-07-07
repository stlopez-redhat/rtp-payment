import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentConfirmation } from '../common/model/payment-confirmation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './maintain-payee-dialog.component.html',
  styleUrls: ['./maintain-payee-dialog.component.scss']
})
export class MaintainPayeeDialogComponent implements OnInit {
  paymentConfirmation: PaymentConfirmation[];
  searchText: string;
  payeeAccountFormGroup: FormGroup;
  isEdit = false;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<MaintainPayeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data.selectedPayee);
    if (this.data.selectedPayee !== null && this.data.selectedPayee !== undefined) {
      this.isEdit = true;

      this.payeeAccountFormGroup = this.formBuilder.group({
        name: [this.data.selectedPayee.name, Validators.required],
        routingNum: [this.data.selectedPayee.routingNum, Validators.required],
        accountNum: [this.data.selectedPayee.accountNum, Validators.required]
      });
    } else {
      this.isEdit = false;

      this.payeeAccountFormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        routingNum: [, Validators.required],
        accountNum: [, Validators.required]
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {

  }

  public applyFilter() {
    console.log("search");
  }
}
