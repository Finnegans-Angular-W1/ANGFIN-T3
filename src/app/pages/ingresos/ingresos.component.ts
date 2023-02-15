import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  data?: any;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions("topup").subscribe((data:any) => {
      this.data = data;
      console.log(this.data);
    }, (error:any) => {
      console.error(error);
    });
  }

  added(){
    alert("agregar ingreso")
  }

  editConcepto(){
    alert("editar concepto")
  }


}
