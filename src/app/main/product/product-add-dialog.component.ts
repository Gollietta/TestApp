import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
    selector: 'product-add-dialog',
    templateUrl: './product-add-dialog.component.html',
    styleUrls: ['./product-add-dialog.component.css']
})
export class ProductAddDialogComponent implements OnInit{

    constructor(
        public dialogRef: MatDialogRef<ProductAddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    ngOnInit(){

    }

    save(){
        this.dialogRef.close({somedata: 1234});
    }

    cancel(){
        this.dialogRef.close();
    }
}
