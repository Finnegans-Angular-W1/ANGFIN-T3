import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { catchError, delay, finalize, Observable, tap, throwError } from 'rxjs';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { Alert } from '../../interfaces/alerts.interface';
import { loading } from '../../state/loader/loader.actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(public dialog: MatDialog, private store :Store) {}

  data : Alert = {
    err:'Error',
    msg:'Error vuelva a intentarlo nuevamente',
    buttonOne:true,
    buttonTwo:false
  }

  openDialog() {
    this.dialog.open(AlertsComponent, {
      data:this.data
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    if (token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(cloned).pipe(
          tap( (__) => {
            this.store.dispatch(loading({isloading:true}))
          }),
          catchError( (err:any) => {
          const msg = err.message
          console.error(msg)
          this.openDialog()
          return throwError(msg)
          } ),
          delay(200),
          finalize( () => 
            this.store.dispatch(loading({isloading:false}))
          )
        );
    }
    else {
      return next.handle(req).pipe(
        catchError( (err:any) => {
        const msg = err.message
        console.error(msg)

        this.openDialog()

        return throwError(msg)
        } )
      );
    }
  }

}



