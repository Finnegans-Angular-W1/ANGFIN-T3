import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
<<<<<<< HEAD
  { path:'login', component:LoginComponent }
=======
  { path:'', component:LoginComponent }
>>>>>>> 6a7e71a95fa493954f4ad60a037812dcdb3f9963
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule { }
