import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';


import { provideMockStore } from '@ngrx/store/testing';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let formInvalido!:boolean

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
    }
    
  })
  
});
