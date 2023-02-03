import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';


import { AuthLoginModule } from './pages/auth-login/auth-login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLoginRoutingModule } from './pages/auth-login/auth-login-routing.module';
import { AuthRegistroModule } from './pages/auth-registro/auth-registro.module';
import { AuthRegistroRoutingModule } from './pages/auth-registro/auth-registro-routing.module';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]

    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthLoginModule,
        AuthLoginRoutingModule,
        AuthRegistroModule, AuthRegistroRoutingModule,
        SharedModule,HttpClientModule
    ]

})
export class AppModule { }

