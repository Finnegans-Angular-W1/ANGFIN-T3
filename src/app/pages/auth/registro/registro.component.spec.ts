import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';


import { provideMockStore } from '@ngrx/store/testing';
import { register } from 'src/app/core/state/auth/auth.actions';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let regExEmail = "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
  let valido!:boolean;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports:[ReactiveFormsModule,HttpClientModule],
      providers: [provideMockStore({})],
    }).compileComponents();
    
    
   
  });
  
  it('should create', () => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('validacion de campos vacios del formulario',()=>{
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
   
    if(component.registroForm.value.email =='' && component.registroForm.value.password =='' && component.registroForm.value.first_name =='' && component.registroForm.value.last_name ==''){
      expect(component.registroForm.invalid).toEqual(true);
      expect(component.registroForm.valid).toEqual(false);
    }

    if(component.registroForm.value.email =='' || 
    component.registroForm.value.password ==''|| component.registroForm.value.password!.length < 6||
    component.registroForm.value.first_name =='' || 
    component.registroForm.value.last_name ==''
    
    ){
      expect(component.registroForm.invalid).toEqual(true);
      expect(component.registroForm.valid).toEqual(false);
    }
    
  });

  it('validacion de campos del formulario',()=>{
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;

    component.registroForm.value.email = 'juanperez2@example.com'
    component.registroForm.value.password ='abc123a'
    component.registroForm.value.first_name ='Juana'
    component.registroForm.value.last_name ='Perez'

    console.log(component.registroForm.valid)

    
  })

});
