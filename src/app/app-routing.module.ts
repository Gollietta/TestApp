import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalProductComponent } from './local-product/local-product.component';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'local-product', component: LocalProductComponent},
  {path: 'sign-up', component: SignupComponent },
  {path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
