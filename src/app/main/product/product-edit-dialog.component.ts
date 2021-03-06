import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.scss']
})
export class ProductEditDialogComponent implements OnInit {
  error_message: string = "";

  constructor(
      public dialogRef: MatDialogRef<ProductEditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(){

  }

  save(product_id: string, product_name: string){
      if(!product_id || !product_name){
          console.log("Product ID is blank.");//TEST
          this.error_message = "Please input both Product ID and Product Name.";
      }
      else{
          this.dialogRef.close({'product_id': product_id, 'product_name': product_name});
      }
  }

  cancel(){
      this.dialogRef.close();
  }
}
