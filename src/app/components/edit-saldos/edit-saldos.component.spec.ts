import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaldosComponent } from './edit-saldos.component';

describe('EditSaldosComponent', () => {
  let component: EditSaldosComponent;
  let fixture: ComponentFixture<EditSaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
