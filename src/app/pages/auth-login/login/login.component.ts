import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public emailInvalid = false;
  public passwordInvalid = false;

  loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.minLength(4)]]
      });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if(!this.loginForm.valid){
      Object.values(this.loginForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }else{
      console.log('Usuario valido')
    }
  }

  public  emailVacio(){
    return this.loginForm.value.email == '' ;
  }
  public  passwordVacio(){
   
    return this.loginForm.value.password ==''; 
  }



}
