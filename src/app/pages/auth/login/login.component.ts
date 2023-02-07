import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';



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

  constructor(private httpService: HttpService,
    private fb: FormBuilder,private loginService:AuthService,private router:Router) { }

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
    
    this.httpService.get<string>(`${environment.URL_BASE}/auth/me`).subscribe(data => {
      console.log(data)
    });

    this.loginService.login(this.loginForm).subscribe({
      next:(res:any) =>{
        this.router.navigateByUrl('')
        localStorage.setItem('token',res.accessToken)

      },
      error: err=>{console.log(err)}
    })
  }
}