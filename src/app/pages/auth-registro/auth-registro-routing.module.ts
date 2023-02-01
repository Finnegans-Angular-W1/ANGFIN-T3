import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path:'register', component:RegistroComponent }
];
=======

const routes: Routes = [];
>>>>>>> 6a7e71a95fa493954f4ad60a037812dcdb3f9963

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRegistroRoutingModule { }
