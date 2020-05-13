import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [ MainComponent, ProductComponent, SettingComponent ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
