import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';


import { provideMockStore } from '@ngrx/store/testing';
import { register } from 'src/app/core/state/auth/auth.actions';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports:[ReactiveFormsModule,HttpClientModule],
      providers: [provideMockStore({})],
    }).compileComponents();
    
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
   
  });
  
  it('should create', () => {
   
    expect(component).toBeTruthy();
  });

  it('inputs vacios despues de crear componente',()=>{
    expect(component.registroForm.value.email).toEqual('')
    expect(component.registroForm.value.password).toEqual('')
    expect(component.registroForm.value.first_name).toEqual('')
    expect(component.registroForm.value.last_name).toEqual('')
  })

  it('formulario invalido despues de crear componente',()=>{
    expect(component.registroForm.invalid).toEqual(true)
  })

  it('No hace submit con campos vacios',()=>{
    expect(component.canSubmit()).toEqual(false)
  })

  it('cambio de password',()=>{
    component.registroForm.value.password = 'abc123'
    expect(component.registroForm.value.password).toContain('abc123')
  })
  it('cambio de first_name',()=>{
    component.registroForm.value.first_name = 'Juan'
    expect(component.registroForm.value.first_name).toContain('Juan')
  })
  it('cambio de last_name',()=>{
    component.registroForm.value.last_name = 'Perez'
    expect(component.registroForm.value.last_name).toContain('Perez')
  })

 


  // it('validacion de campos vacios del formulario',()=>{
  //   fixture = TestBed.createComponent(RegistroComponent);
  //   component = fixture.componentInstance;
   
  //   if(component.registroForm.value.email =='' && component.registroForm.value.password =='' && component.registroForm.value.first_name =='' && component.registroForm.value.last_name ==''){
  //     expect(component.registroForm.invalid).toEqual(true);
  //     expect(component.registroForm.valid).toEqual(false);
  //   }

  //   if(component.registroForm.value.email =='' || 
  //   component.registroForm.value.password ==''|| component.registroForm.value.password!.length > 6||
  //   component.registroForm.value.first_name =='' || 
  //   component.registroForm.value.last_name ==''
    
  //   ){
  //     expect(component.registroForm.invalid).toEqual(true);
  //     expect(component.registroForm.valid).toEqual(false);
  //   }
    
    
  // });



});
