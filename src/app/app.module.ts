import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLoginModule } from './pages/auth-login/auth-login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLoginRoutingModule } from './pages/auth-login/auth-login-routing.module';
import { AuthRegistroModule } from './pages/auth-registro/auth-registro.module';
import { AuthRegistroRoutingModule } from './pages/auth-registro/auth-registro-routing.module';
@NgModule({
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
        AuthRegistroModule,AuthRegistroRoutingModule
    ]

})
export class AppModule { }
