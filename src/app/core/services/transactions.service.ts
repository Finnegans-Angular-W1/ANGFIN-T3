import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Observable ,take} from 'rxjs';
import { map } from 'rxjs/operators';
import { Transferencia } from '../interfaces/transferencia.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpService: HttpService) {}

  getTransactions(move:any): Observable<any> {
    return this.httpService.get<any>(`${environment.URL_BASE}/transactions`)
      .pipe(
        take(2),
        map((transactions:any) => {
          return Object.values(transactions.data).filter((item: any) => (item.type === move))
            .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        })
      );
  }

  editTransaction(data:Transferencia,id:any):Observable<any>{
    return this.httpService.put(`${environment.URL_BASE}/transactions/:${id}`,data)
  }

}