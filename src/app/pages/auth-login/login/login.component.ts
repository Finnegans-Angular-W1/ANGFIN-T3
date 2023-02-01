import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
=======
>>>>>>> 6a7e71a95fa493954f4ad60a037812dcdb3f9963

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 6a7e71a95fa493954f4ad60a037812dcdb3f9963
  }

}
