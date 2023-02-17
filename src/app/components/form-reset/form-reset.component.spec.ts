import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { formResetComponent } from './form-reset.component';
import { MatDialogModule } from '@angular/material/dialog';



describe('FormResetComponent', () => {
  let component: formResetComponent;
  let fixture: ComponentFixture<formResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule,MatDialogModule], 
      declarations: [ formResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(formResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});