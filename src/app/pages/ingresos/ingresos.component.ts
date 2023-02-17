import { Component, OnInit, Output } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  @Output() data?: Transferencia[];
  edit:boolean = false
  addInport:boolean = false

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
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
    this.edit= !this.edit
  }


  addData(data:any){
    this.data?.push(data)
    this.openAndClose()
  }


}
