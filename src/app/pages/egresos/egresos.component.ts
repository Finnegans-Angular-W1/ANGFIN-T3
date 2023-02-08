import { Component, OnInit } from '@angular/core';
import { FormatService } from 'src/app/core/services/Format.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {

  data?: any;

  constructor(private transactionsService: TransactionsService, private formatService: FormatService) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions("payment").subscribe((data:any) => {
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