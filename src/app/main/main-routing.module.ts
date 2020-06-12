import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { GridtableComponent } from './gridtable/gridtable.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  {path: '', component: MainComponent,
    children:[
      {path: 'product', component: ProductComponent},
      {path: 'gridtable', component: GridtableComponent},
      {path: 'setting', component: SettingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
