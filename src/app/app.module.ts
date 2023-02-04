import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';




import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './pages/auth/auth.module';
@NgModule({

  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    AuthModule
    
    // AuthLoginModule,
    // AuthLoginRoutingModule,
    // AuthRegistroModule, 
    // AuthRegistroRoutingModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

