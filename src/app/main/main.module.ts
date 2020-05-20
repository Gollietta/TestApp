import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { ProductAddDialogComponent } from './product/product-add-dialog.component';
import { SettingComponent } from './setting/setting.component';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ MainComponent, ProductComponent, SettingComponent, ProductAddDialogComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatDialogModule
  ],
  //entryComponents: [ProductAddDialogComponent]
})
export class MainModule { }
