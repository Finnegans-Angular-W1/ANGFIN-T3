import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './core/services/auth/auth.interceptor';
@NgModule({

  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule
    
    // AuthLoginModule,
    // AuthLoginRoutingModule,
    // AuthRegistroModule, 
    // AuthRegistroRoutingModule,
    // HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]

})
export class AppModule {}


