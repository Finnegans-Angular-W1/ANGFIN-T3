import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../core/services/http.service';
import { Transferencia } from '../../core/interfaces/transferencia.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';



const baseUrl = environment.URL_BASE

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  isEdition: boolean = false;

  @Input()
  formValues?: FormGroup;

  @Input()
  view : boolean = false

  @Input() type :'topup'|'payment' = 'topup'

  @Output() data :EventEmitter<Transferencia> = new EventEmitter() 

  @Output() onClose :EventEmitter<boolean> = new EventEmitter() 

  accId!:number; 
  usId!:number;
  toId!:number

  form: FormGroup = this.fb.group({
    monto: [{value:0, disabled: this.isEdition}, [Validators.required, Validators.min(1),Validators.pattern("^[0-9]*$")]],
    concepto: ['', [Validators.required]],
    fecha: [{value: moment().format('DD/MM/YYYY'), disabled: this.isEdition}, [Validators.required]]
  });
  
  constructor( private fb: FormBuilder, private httpService : HttpService ,private authS:AuthService) {}

  ngOnInit(): void {
    if(!this.isEdition){
      this.form.reset({
        monto: 0,
        concepto: '',
        fecha: ''
      })
    }else{
      this.form = this.formValues || this.fb.group({
        monto: [{value: 0, disabled: this.isEdition}, [Validators.required, Validators.min(1)]],
        concepto: ['', [Validators.required]],
        fecha: [{value: moment().format('DD/MM/YYYY'), disabled: this.isEdition}, [Validators.required]]
      });
    }

    this.authS.getCuenta().subscribe((res:any)=>{
      this.accId = res[0].id
      this.toId = res[0].id
      this.usId = res[0].userId
    })

  }


  submit(){

    if(this.form.valid){
      const body ={
        amount: this.form.get('monto')?.value,
        concept: this.form.get('concepto')?.value,
        date: this.form.get('fecha')?.value,
        type: this.type,
        accountId: this.accId,
        userId: this.usId,
        to_account_id: this.toId
      }
  
  
      this.httpService.post<Transferencia>(`${baseUrl}/transactions`,body,false).subscribe(resp =>{
        this.data.emit(resp)
      })
      this.httpService.post<any>(`${baseUrl}/fixeddeposits`,{
        
          "userId": this.usId,
          "accountId": this.accId,
          "amount": this.form.get('monto')?.value,
          "creation_date": "2022-10-26",
          "closing_date": "2022-11-26"
        
      })
    }


  }

  close(){
    this.view = !this.view
    this.onClose.emit(this.view)
  }


  
}


