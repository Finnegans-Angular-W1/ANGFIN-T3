import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService:HttpService ) { }

  ngOnInit(): void {
  }

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
