import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ZipcloudComponent } from './zipcloud/zipcloud.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { LocalProductComponent } from './local-product/local-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ZipcloudComponent,
    RandomuserComponent,
    LocalProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
