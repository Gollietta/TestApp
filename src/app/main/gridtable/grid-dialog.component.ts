import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-dialog',
  templateUrl: './grid-dialog.component.html',
  styleUrls: ['./grid-dialog.component.css']
})
export class GridDialogComponent implements OnInit {
  error_message: string = "";
  rowData: any;

  @ViewChild('agGridDetail') agGridDetail: AgGridAngular;

  columnDefs = [
    {headerName: 'PRODUCT_ID', field: 'product_id', sortable: true, filter: true},
    {headerName: 'PRODUCT_NAME', field: 'product_name', sortable: true, filter: true, editable: true},
  ];

  constructor(
    public dialogRef: MatDialogRef<GridDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedRowData: any
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close({});
  }

  cancel(){
      this.dialogRef.close();
  }

}
