import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LocalProductComponent } from './local-product/local-product.component';
//import { AuthInterceptor } from './auth/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LocalProductComponent
//    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule
//    HttpClientModule,
//    HttpClientJsonpModule,
//    FormsModule,
//    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/