import { Component, OnInit } from '@angular/core';
import { FormatService } from 'src/app/core/services/Format.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['../egresos/egresos.component.scss']
})
export class IngresosComponent implements OnInit {

  data?: any;

  constructor(private transactionsService: TransactionsService, private formatService: FormatService) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions("topup").subscribe((data:any) => {
      this.data = data;
      console.log(this.data);
    }, (error:any) => {
      console.error(error);
    });
  }

  formatAmount(amount: string): string {
    return this.formatService.formatAmount(amount);
  }

}
