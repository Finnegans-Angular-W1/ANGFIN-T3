import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/interfaces/transferencia.interface';
import {TransactionsService} from '../../core/services/transactions.service'
@Component({
  selector: 'app-edit-saldos',
  templateUrl: './edit-saldos.component.html',
  styleUrls: ['./edit-saldos.component.scss']
})
export class EditSaldosComponent implements OnInit {
  @Input() id!:number
  @Input() data!:Transferencia[] | undefined;
  addInport:boolean = false


  
  constructor(private transact : TransactionsService) { }

  ngOnInit(): void {
  }


  submit(event: Transferencia[]) {
    this.data = event;
    console.log(this.data)
    this.transact.editTransaction(this.data[2],this.id)
}
}
