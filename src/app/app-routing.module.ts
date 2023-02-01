import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './pages/auth-login/login/login.component';
import {RegistroComponent} from './pages/auth-registro/registro/registro.component'

const routes: Routes = [  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
