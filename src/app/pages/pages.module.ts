import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PagesComponent,HomeComponent
  ],
  imports: [
    CommonModule, // Habilita el router-outlet
    PagesRoutingModule,
  ]
})
export class PagesModule { }
