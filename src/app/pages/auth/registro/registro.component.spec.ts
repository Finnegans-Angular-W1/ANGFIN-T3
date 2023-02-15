import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Form, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';


import { provideMockStore } from '@ngrx/store/testing';

import { RegistroComponent } from './registro.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  const formBuilder : FormBuilder=new FormBuilder();
  let service:AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [provideMockStore({}), { provide: ComponentFixtureAutoDetect, useValue: true },AuthService],
    }).compileComponents();


  });

  beforeEach(() => {

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('inputs vacios despues de crear componente', () => {
    expect(component.registroForm.value.email).toEqual('')
    expect(component.registroForm.value.password).toEqual('')
    expect(component.registroForm.value.first_name).toEqual('')
    expect(component.registroForm.value.last_name).toEqual('')
  })

  it('formulario invalido despues de crear componente', () => {
    expect(component.registroForm.invalid).toEqual(true)
  })

  it('No hace submit con campos vacios', () => {
    component.registroForm.value.password = ''
    component.registroForm.value.first_name = ''
    component.registroForm.value.last_name = ''
    component.registroForm.value.email = ''
    expect(component.canSubmit()).toEqual(false)
  })

  it('cambio de password', () => {
    component.registroForm.value.password = 'abc123'
    expect(component.registroForm.value.password).toContain('abc123')
  })
  it('cambio de first_name', () => {
    component.registroForm.value.first_name = 'Juan'
    expect(component.registroForm.value.first_name).toContain('Juan')
  })
  it('cambio de last_name', () => {
    component.registroForm.value.last_name = 'Perez'
    expect(component.registroForm.value.last_name).toContain('Perez')
  })

  it('validando usuario', () => {
    component.registroForm = formBuilder.group( {
      first_name:['Juan'],
      last_name:['Perez'],
      email:['test@test.com'],
      password:['test123'],
      terms:[true]
    })
    
    expect(component.registroForm.valid).toEqual(true)
    expect(component.canSubmit()).toEqual(true)
  })

  it('usuario invalido con email incompleto', () => {
    // component.registroForm = formBuilder.group( {
    //   first_name:['Juan'],
    //   last_name:['Perez'],
    //   email:[''],
    //   password:['test123'],
    //   terms:[true]
    // })
    component.registroForm.value.first_name = 'Juan'
    component.registroForm.value.last_name = 'Perez'
    component.registroForm.value.email=''
    component.registroForm.value.password = 'abc123'
    expect(component.registroForm.valid).toEqual(false)
    expect(component.canSubmit()).toEqual(false)
  })

  it('usuario invalido con email incompleto', () => {
    
    component.registroForm.value.first_name = 'Juan'
    component.registroForm.value.last_name = 'Perez'
    component.registroForm.value.email='juan@example'
    component.registroForm.value.password = 'abc123'
    expect(component.registroForm.valid).toEqual(false)
    expect(component.canSubmit()).toEqual(false)
  })

  it('usuario invalido con password incompleto', () => {
    component.registroForm.value.first_name = 'Juan'
    component.registroForm.value.last_name = 'Perez'
    component.registroForm.value.email='asd@asd.asd'
    component.registroForm.value.password = ''
    expect(component.canSubmit()).toEqual(false)
  })

  // it('test servicio register',()=>{
  //   component.registroForm = formBuilder.group( {
  //     first_name:['Juan'],
  //     last_name:['Perez'],
  //     email:['asd@asd.com'],
  //     password:['test123'],
  //     terms:[true]
  //   });

  //   service.register(component.registroForm).subscribe(
      
  //   )
  // })


  
});
