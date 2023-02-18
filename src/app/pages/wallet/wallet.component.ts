import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  canSee : boolean = false;

  canViewForm:boolean = false

  numberOperations :number = 10;

  info! : string 

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.canSee = !this.canSee
  }

  addEvent(date:string){

    if(!date){
      return
    }

    this.closedForm()

    this.numberOperations = Math.round(Math.random() * 100000)


  }

  openForm(text :string){
    this.canViewForm = true
    this.info = text
  }

  closedForm(){
    this.canViewForm = false
  }

}
