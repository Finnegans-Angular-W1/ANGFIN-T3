import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { HttpService } from 'src/app/core/services/http.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data?: Transferencia[];

  addInport:boolean = false

  constructor(private httpservice:HttpService ,
    private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.llamadaUsers(296 , 300)
    this.transactionsService.getTransactions("topup").subscribe((data:any) => {
      this.data = data;
      console.log(this.data);
    }, (error:any) => {
      console.error(error);
    });
  }

  openAndClose(){
    this.addInport = !this.addInport
  }

  editConcepto(){
    alert("editar concepto")
  }

  addData(data:any){
    this.data?.push(data)
    console.log(data)
    this.openAndClose()
  }

llamadaUsers(inicio:any,fin:any){

  for (let i = inicio; i <= fin; i++) {
    this.httpservice.get<any>(`${environment.URL_BASE}/users/${i}`).subscribe(
      (data: any) => {
        console.log(data?.id ? data : `No se encontró un usuario con la ID ${i}`);
      },
      (error: any) => {
        console.error(`Error al obtener usuario con ID ${i}: ${error.message}`);
      }
    );
  }
}
}
