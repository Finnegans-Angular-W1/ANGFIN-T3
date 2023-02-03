import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient:HttpClient){}

  login(form:FormGroup){       
      return this.httpClient.post(`${environment.URL_BASE}/auth/login`,form.value)       
  }

  register(form:FormGroup){     
      return this.httpClient.post(`${environment.URL_BASE}/users`,form.value)
  }
  

  getToken() {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean{
    return !!this.getToken();
  }
}