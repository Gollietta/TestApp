import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ZipcloudComponent } from './zipcloud/zipcloud.component';
import { RandomuserComponent } from './randomuser/randomuser.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ZipcloudComponent,
    RandomuserComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
