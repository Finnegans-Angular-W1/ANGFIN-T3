import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  formatAmount(amount: string): string {
    const parsedAmount = parseFloat(amount);
    return parsedAmount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  }

}