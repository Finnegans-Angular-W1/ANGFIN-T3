import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import { NavLinksComponent } from './shared/footer/nav-links/nav-links.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
