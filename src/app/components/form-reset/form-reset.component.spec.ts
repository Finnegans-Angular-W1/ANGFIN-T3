import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { formResetComponent } from './form-reset.component';

/* 
describe('formResetComponent', () => {
  let component: formResetComponent;
  let fixture: ComponentFixture<formResetComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [formResetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(formResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable submit button when form is invalid', () => {
    const emailControl = component.validateForm.get('email') as FormControl;
    emailControl.setValue('');

    const passwordControl = component.validateForm.get('password') as FormControl;
    passwordControl.setValue('password');

    const password2Control = component.validateForm.get('password2') as FormControl;
    password2Control.setValue('password');

    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable submit button when form is valid', () => {
    const emailControl = component.validateForm.get('email') as FormControl;
    emailControl.setValue('test@example.com');

    const passwordControl = component.validateForm.get('password') as FormControl;
    passwordControl.setValue('password');

    const password2Control = component.validateForm.get('password2') as FormControl;
    password2Control.setValue('password');

    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeFalsy();
  });

  it('should call submitForm function when form is submitted', () => {
    spyOn(component, 'submitForm');

    const emailControl = component.validateForm.get('email') as FormControl;
    emailControl.setValue('test@example.com');

    const passwordControl = component.validateForm.get('password') as FormControl;
    passwordControl.setValue('password');

    const password2Control = component.validateForm.get('password2') as FormControl;
    password2Control.setValue('password');

    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    submitButton.click();

    expect(component.submitForm).toHaveBeenCalled();
    
  });
}); */