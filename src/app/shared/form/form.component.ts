import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../core/services/http.service';
import { Transferencia } from '../../core/interfaces/transferencia.interface';



const baseUrl = environment.URL_BASE

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() id!:number

  @Input()
  isEdition: boolean = false;

  @Input()
  formValues?: FormGroup;

  @Input()
  view : boolean = false

  @Input() type :'topup'|'payment' = 'topup'

  @Input() data :EventEmitter<Transferencia> = new EventEmitter() 
  @Input() creden!: Transferencia
  @Output() onClose :EventEmitter<boolean> = new EventEmitter() 



  form: FormGroup = this.fb.group({
    monto: [{value:0, disabled: this.isEdition}, [Validators.required, Validators.min(1),Validators.pattern("^[0-9]*$")]],
    concepto: ['', [Validators.required]],
    fecha: [{value: moment().format('DD/MM/YYYY'), disabled: this.isEdition}, [Validators.required]]
  });
  
  constructor( private fb: FormBuilder, private httpService : HttpService ) {}

  ngOnInit(): void {
    if(!this.isEdition){
      this.form.reset({
        monto: 0,
        concepto: '',
        fecha: ''
      })
    }else{
      this.form = this.formValues || this.fb.group({
        monto: [{ disabled: true}],
        concepto: [this.creden, [Validators.required]],
        fecha: [{ disabled: true}]
      });
    }

  }


  submit(){

    if(this.form.valid){
      const body ={
        amount: this.form.get('monto')?.value,
        concept: this.form.get('concepto')?.value,
        date: this.form.get('fecha')?.value,
        type: this.type,
        accountId: 1,
        userId: 4,
        to_account_id: 5
      }
  
  
      this.httpService.post<Transferencia>(`${baseUrl}/transactions`,body,false).subscribe(resp =>{
        this.data.emit(resp)
      })
    }else if(this.isEdition){
      let body!:Transferencia;
      this.httpService.get<Transferencia>(`${baseUrl}/transactions${this.id}`).subscribe((res:Transferencia)=>{
        console.log(res)
        body = res;
      })
        
  
  
      this.httpService.put<Transferencia>(`${baseUrl}/transactions/${this.id}`,body,false).subscribe(resp =>{
        this.data.emit(resp)
      })
    }


  }

  close(){
    this.view = !this.view
    this.onClose.emit(this.view)
  }


}


