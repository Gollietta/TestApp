import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
//import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
//import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
//import { MenuModule } from '@ag-grid-enterprise/menu';
//import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
//import '@ag-grid-community/core/dist/styles/ag-grid.css';
//import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';



@Component({
  selector: 'app-grid-dialog',
  templateUrl: './grid-dialog.component.html',
  styleUrls: ['./grid-dialog.component.css']
})
export class GridDialogComponent implements OnInit {
  error_message: string = "";
  rowData: any;

  companyMappings = {1: 'Apple', 2: 'Samsung', 3: 'Sony'};
//  companyMappings = ['Apple', 'Samsung', 'Sony'];


  @ViewChild('agGridDetail') agGridDetail: AgGridAngular;

  columnDefs = [
//    {headerName: 'COMPANY', field: 'company', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'COMPANY', editable: true, cellEditor: 'agSelectCellEditor', cellEditorParams: {values: ['Apple', 'Samsung', 'Sony']}, 
      field: 'company', sortable: true, filter: true},
    {headerName: 'PRODUCT_ID', field: 'product_id', sortable: true, filter: true},
    {headerName: 'PRODUCT_NAME', field: 'product_name', sortable: true, filter: true, editable: false},
    {headerName: 'QTY', field: 'quantity', sortable: true, filter: true},
    {headerName: 'USD', field: 'price_usd', sortable: true, filter: true},
    {headerName: 'JPY', field: 'price_jpy', sortable: true, filter: true},
    {headerName: 'NOTE', field: 'note', sortable: true, filter: true},
    {headerName: 'HIDDEN', field: 'hidden', sortable: true, filter: true},
    {headerName: 'ADDED', field: 'date_added', sortable: true, filter: true},
    {headerName: 'UPDATED', field: 'date_updated', sortable: true, filter: true}

    /*{
      headerName: 'MAKER',
      field: 'make',
      cellEditor: 'select',
      cellEditorParams: { values: this.extractValues(this.companyMappings) },
      filterParams: {
        valueFormatter: function(params) {
          return this.lookupValue(this.companyMappings, params.value);
        },
      },
      valueFormatter: function(params) {
        return this.lookupValue(this.companyMappings, params.value);
      },
      valueParser: function(params) {
        return this.lookupKey(this.companyMappings, params.newValue);
      },
    }*/

  ];

  constructor(
    public dialogRef: MatDialogRef<GridDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedRowData: any
  ) { 
    console.log("Showing received data.");//TEST
    console.log(selectedRowData);//TEST
    //api.setRowData(selectedRowData);
  }

  ngOnInit(): void {
  }

  extractValues(mappings) {
    return Object.keys(mappings);
  }

  lookupValue(mappings, key) {
    return mappings[key];
  }

  save(){
    this.dialogRef.close(this.selectedRowData);
  }

  cancel(){
      //console.log(this.selectedRowData);
      this.dialogRef.close();
  }

}
