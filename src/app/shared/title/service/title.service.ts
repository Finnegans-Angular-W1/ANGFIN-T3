import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Title } from '../interfaces/title.interface';



@Injectable({
  providedIn: 'root'
})

export class TitleService {

  private title: Title = { name: 'Home' };

  private titleSubject = new BehaviorSubject<Title>(this.title);

  constructor() { }

  setTitle(title: Title) {
    this.title = title;
    this.titleSubject.next(this.title);
  }

  getTitle(): Observable<Title> {
    return this.titleSubject.asObservable();
  }
}
