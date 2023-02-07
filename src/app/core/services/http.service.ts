import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _groupId!: string;
  private _headers!: HttpHeaders;
  private _token?: string;

  constructor(private http: HttpClient) {
    this._groupId = 'your_group_id';
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public setToken(token: string) {
    this._token = token;
  }

  public get<T>(url: string, activateHeader: boolean = false): Observable<T> {
    let headers = {};
    if (activateHeader) {
      headers = { headers: this._headers };
    }
    if (this._token) {
      headers = { headers: this._headers.append('Authorization', `Bearer ${this._token}`) };
    }
    return this.http.get<T>(url, headers);
  }
}