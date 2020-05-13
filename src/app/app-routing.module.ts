import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainModule} from './main/main.module'; //Must include even when loadChildren is used.
//import { RandomNumberComponent } from './random-number/random-number.component';

import { AuthGuard } from './auth/auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  //{ path: '**', component: PageNotFoundComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'secret-random-number',
    loadChildren: './random/random.module#RandomModule',
    canActivate: [JwtAuthGuard],
    canLoad: [JwtAuthGuard]
  },
  {
    //path:'main', loadChildren: './main/main.module#MainModule'
    path:'main', loadChildren: () => MainModule,
    canActivate: [JwtAuthGuard],
    canLoad: [JwtAuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }




/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalProductComponent } from './local-product/local-product.component';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
//  {path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'local-product', component: LocalProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
*/