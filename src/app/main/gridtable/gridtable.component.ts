import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridtableService } from './gridtable.service';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GridDialogComponent } from './grid-dialog.component';

@Component({
  selector: 'app-gridtable',
  templateUrl: './gridtable.component.html',
  styleUrls: ['./gridtable.component.scss']
})
export class GridtableComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    {headerName: 'COMPANY', field: 'company', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'PRODUCT_ID', field: 'product_id', sortable: true, filter: true},
    {headerName: 'PRODUCT_NAME', field: 'product_name', sortable: true, filter: true, editable: false},
    {headerName: 'QTY', field: 'quantity', sortable: true, filter: true},
    {headerName: 'USD', field: 'price_usd', sortable: true, filter: true},
    {headerName: 'JPY', field: 'price_jpy', sortable: true, filter: true},
    {headerName: 'NOTE', field: 'note', sortable: true, filter: true},
    {headerName: 'HIDDEN', field: 'hidden', sortable: true, filter: true},
    {headerName: 'ADDED', field: 'date_added', sortable: true, filter: true},
    {headerName: 'UPDATED', field: 'date_updated', sortable: true, filter: true},
    
  ];

  rowData: any
  selectedRowData: any;

  constructor(private http: HttpClient, private gridtableService: GridtableService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchProducts();
    console.log(this.rowData);
  }

  searchProducts(): void{
    this.gridtableService.searchProducts("")
    .subscribe(response => this.rowData = response);
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onSelectionChanged(event){
    this.selectedRowData = this.agGrid.api.getSelectedRows();
    console.info(this.selectedRowData);//TEST
  }

  openGridDialog(){
    console.log(this.selectedRowData);//TEST
    if(!this.selectedRowData || this.selectedRowData.length===0){
      alert("At least one row must be selected.");
      return;
    }

    const dialogConfig = new MatDialogConfig();
    let returned_data: any;

    dialogConfig.data = this.selectedRowData;
    dialogConfig.height = '900px';
    dialogConfig.width = '1500px';
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    // NOTE: Must have prebuilt-themes imported in style.css or dialog will be shown at bottom of page.
    let dialogRef = this.dialog.open(GridDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      if(!value){

      }
      else{

      }
      this.agGrid.api.setRowData(this.rowData);
    })

  }
}
