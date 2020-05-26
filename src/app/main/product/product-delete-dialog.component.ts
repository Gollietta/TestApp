import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-delete-dialog',
  templateUrl: './product-delete-dialog.component.html',
  styleUrls: ['./product-delete-dialog.component.css']
})
export class ProductDeleteDialogComponent implements OnInit {
  error_message: string = "";

  constructor(
      public dialogRef: MatDialogRef<ProductDeleteDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){

  }

  delete(){
    this.dialogRef.close("Delete");
  }

  cancel(){
    this.dialogRef.close();
  }
}
