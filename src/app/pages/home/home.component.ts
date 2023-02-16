import { AfterViewInit, Component, OnInit } from '@angular/core';
import { take,takeWhile } from 'rxjs';
import { TransactionsService } from '../../core/services/transactions.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { User } from '../../core/state/auth/interfaces/user.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infoAcount : any

  dataUser!:User

  selected: Date = new Date;

  constructor(private transations : TransactionsService,
              private authService : AuthService){}


  ngOnInit(): void {
    this.transations.getTransactions('payment')
    .subscribe(
      resp =>{
        this.infoAcount = resp.slice(0, 2) 
      }
    )

    this.authService.userDates().subscribe(
      (resp:User) => { this.dataUser = resp }
    )


  }


}
