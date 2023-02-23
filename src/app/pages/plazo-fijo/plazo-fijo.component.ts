import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {
resultado:number=0;
form = this.fb.group({
day: [0, Validators.required],
money: [0, Validators.required]
});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  //debo calcular una ganancia anual de 75 en días
calcular(){
  let days = this.form.get('day')?.value;
  let money= this.form.get('money')?.value;
 this.resultado= ((money!*0.75)/365)*days!;
}
}
