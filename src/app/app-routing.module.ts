import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipcloudComponent } from './zipcloud/zipcloud.component';
import { RandomuserComponent } from './randomuser/randomuser.component';

const routes: Routes = [
  {path: 'zipcloud', component: ZipcloudComponent },
  {path: 'randomuser', component: RandomuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
