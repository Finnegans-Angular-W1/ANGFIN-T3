import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PagesComponent,
    PerfilComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, // Habilita el router-outlet
    PagesRoutingModule,
    SharedModule,
  ],
  exports:[
    PagesRoutingModule,
  ]
})
export class PagesModule { }
