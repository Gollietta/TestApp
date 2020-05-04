import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalProductComponent } from './local-product/local-product.component';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
//import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
//  {path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'local-product', component: LocalProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
