import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, throwError } from 'rxjs';
// import { DialogComponent } from 'src/app/shared/dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class InterceptorErrorsService implements HttpInterceptor {



  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(DialogComponent, {
  //     data:{
  //       title:'error',
  //       msg:'error de servicio intente nuevamente'
  //     }
  //   });
  // }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError( (err:any) => {
       const msg = err.message
       console.error(msg)

      //  this.openDialog()

      return throwError(msg)
      } )
    )

    
  }
}
