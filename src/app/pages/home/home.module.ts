import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [

    CommonModule,
    SharedModule
    // Aca van todos los modulos de los componentes que se van a usar dentro de home
  ]
})
export class HomeModule { }
