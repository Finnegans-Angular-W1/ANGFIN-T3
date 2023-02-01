import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
=======

>>>>>>> 6a7e71a95fa493954f4ad60a037812dcdb3f9963

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AuthLoginRoutingModule,
    FormsModule,ReactiveFormsModule
   
=======
    AuthLoginRoutingModule
>>>>>>> 6a7e71a95fa493954f4ad60a037812dcdb3f9963
  ]
})
export class AuthLoginModule { }
