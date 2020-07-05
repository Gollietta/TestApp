import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { DateFilter } from 'ag-grid-community';

@Component({
    selector: 'product-add-dialog',
    templateUrl: './product-add-dialog.component.html',
    styleUrls: ['./product-add-dialog.component.scss']
})
export class ProductAddDialogComponent implements OnInit{
    error_message: string = "";
    addForm: FormGroup;
    date_added: Date;
    objectToBeAdded: any;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ProductAddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    ngOnInit(){
        this.addForm = this.formBuilder.group({
            company:  ['', Validators.required],
            product_id: ['', Validators.required],
            product_name: ['', Validators.required],
            quantity: [0, Validators.required],
            price_usd: [0.00, Validators.required],
            price_jpy: [0, Validators.required],
            note: [''],
            hidden: [false, Validators.required],
//            date_added: ['', Validators.required],
//            date_updated: ['', Validators.required]
        })
    }

    save(){
        this.date_added = new Date();
        this.objectToBeAdded = {date_added: this.date_added, date_updated: this.date_added, ...this.addForm.value};

        console.log("Save is clicked.");//TEST
        console.log(this.objectToBeAdded);//TEST

        this.dialogRef.close(this.objectToBeAdded);
    }

    cancel(){
        console.log("Cancel is clicked.");//TEST

        this.dialogRef.close();
    }

}
