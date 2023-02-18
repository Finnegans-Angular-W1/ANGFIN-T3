import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { formResetComponent } from './form-reset.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { HttpService } from 'src/app/core/services/http.service';


describe('Test Formulario de Contraseña', () => {
  let component: formResetComponent;
  let fixture: ComponentFixture<formResetComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule,
                BrowserDynamicTestingModule,MatDialogModule],
      providers: [
                    {provide: MatDialogRef, useValue: {}},
                    {provide: MAT_DIALOG_DATA, useValue: []},
                    [ { useValue: true }, HttpService],
                ],
      declarations: [ formResetComponent ]
    
   
    })
    .compileComponents();

    fixture = TestBed.createComponent(formResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('Se crea correctamente el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario invalido' , () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    app.validateForm.value.email=['juanperez@example.com'],
    app.validateForm.value.password = ''
    app.validateForm.value.email = ''
    
    expect(app.validateForm.invalid).toBeTrue();
  })

  it('El botón de enviar debe estar deshabilitado si el campo de email está vacío', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const emailControl = app.validateForm.controls['email'];
    emailControl.setValue('');
    emailControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de email contiene una dirección de correo electrónico invalido', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const emailControl = app.validateForm.controls['email'];
    emailControl.setValue('correo-invalido');
    emailControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de contraseña está vacío', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const passwordControl = app.validateForm.controls['password'];
    passwordControl.setValue('');
    passwordControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de contraseña no tiene al menos 6 caracteres', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const passwordControl = app.validateForm.controls['password'];
    passwordControl.setValue('abc12');
    passwordControl.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('El botón de enviar debe estar deshabilitado si el campo de confirmación de contraseña está vacío', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const password2Control = app.validateForm.controls['password2'];
    password2Control.setValue('');
    password2Control.markAsTouched();
  
    const btnElement = fixture.debugElement.query(By.css('button.btn_submit'));
    expect(btnElement.nativeElement.disabled).toBeTrue();
  });

  it('formulario invalido por error en campo password2', () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    app.validateForm = formBuilder.group({
      email: ['juanperez@example.com', [Validators.required, Validators.email]],
      password: ['abc123', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    }, { validator: app.checkPasswordsMatch });
  
    app.validateForm.controls['password2'].setValue('abc');
  
    expect(app.validateForm.invalid).toBeTrue();
  });
  
  it('Formulario valido' , () => {
    const fixture = TestBed.createComponent(formResetComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    app.validateForm = formBuilder.group({
      email: ['juanperez@example.com'],
      password: ['abc123'],
      password2: ['abc123'],
    })

    expect(app.validateForm.valid).toBeTrue()
  })


});