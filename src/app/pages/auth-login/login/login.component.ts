import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { group } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required,Validators.minLength(4)]]
      });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if(this.loginForm.invalid){
     alert('usuario invalido')
    }
    else console.log(this.loginForm.value);
  }

  public  emailVacio(){
    return this.loginForm.value.email =='' ;
  }
  public  passwordVacio(){
    return this.loginForm.value.password ==''; 
  }

}
