import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { login } from 'src/app/core/state/auth/auth.actions';


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
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,private loginService:AuthService,private router:Router, private store: Store) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    if (!this.loginForm.valid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {
      console.log('Usuario valido')
      
    }
  }

  public emailVacio() {
    return this.loginForm.value.email == '';
  }
  public passwordVacio() {

    return this.loginForm.value.password == '';
  }

  login(){
    this.loginService.login(this.loginForm).subscribe({
      next:(res:any) =>{
        this.router.navigateByUrl('')
        localStorage.setItem('token',res.accessToken)
        this.getUserData();
      },
      error: err =>{console.log(err)}
    })
  }

  getUserData(){
    this.loginService.getUserData().subscribe({
      next:(res:any) =>{
        this.store.dispatch(login(res));
      },
      error: err =>{console.log(err)}
    })
  }
}