import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { ProductAddDialogComponent } from './product/product-add-dialog.component';
import { SettingComponent } from './setting/setting.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ProductDeleteDialogComponent } from './product/product-delete-dialog.component';
import { ProductEditDialogComponent } from './product/product-edit-dialog.component';
import { GridtableComponent } from './gridtable/gridtable.component';

import { AgGridModule } from 'ag-grid-angular';
import { GridDialogComponent } from './gridtable/grid-dialog.component';

@NgModule({
  declarations: [ MainComponent, ProductComponent, SettingComponent, ProductAddDialogComponent, ProductDeleteDialogComponent, ProductEditDialogComponent, GridtableComponent, GridDialogComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AgGridModule.withComponents([])
  ],
})
export class MainModule { }
