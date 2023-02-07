import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './core/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'e-wallet';
  
  constructor(private httpService: HttpService){}
  roles(){
    this.httpService.get<string>(`${environment.URL_BASE}/accounts/me`).subscribe(data => {
      console.log(data)
    }, error => {
      console.error(error);
    });
  }
  user(){
    this.httpService.get<string>(`${environment.URL_BASE}/auth/me`).subscribe(data => {
      console.log(data)
    }, error => {
      console.error(error);
    });
  }
}
