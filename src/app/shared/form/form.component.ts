import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';

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

  form: FormGroup = this.fb.group({
    monto: [{value: 0, disabled: this.isEdition}, [Validators.required, Validators.min(1)]],
    concepto: ['', [Validators.required]],
    fecha: [{value: moment().format('DD/MM/YYYY'), disabled: this.isEdition}, [Validators.required]]
  });
  
  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    if(!this.isEdition){
      this.form.reset({
        monto: '',
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
  }
}
