import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
   this.myForm = this.crearFormulario();
  }

  private crearFormulario():FormGroup{
    return this.fb.group({
      email: ['',Validators.required,Validators.email],
      password:['',Validators.required]
    })
  }

  public submitForm() {
    console.log(this.myForm.value);
  }

}
