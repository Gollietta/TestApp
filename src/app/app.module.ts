import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
//import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // MainModule, //Delete because of lazy loading. It's called in app-routing.module instead.
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }