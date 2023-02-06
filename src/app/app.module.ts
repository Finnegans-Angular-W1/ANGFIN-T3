import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AuthModule } from './pages/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './core/state/app.state';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    AuthModule,
    StoreModule.forRoot(ROOT_REDUCERS)
    // AuthLoginModule,
    // AuthLoginRoutingModule,
    // AuthRegistroModule, 
    // AuthRegistroRoutingModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}


