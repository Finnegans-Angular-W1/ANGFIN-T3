import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formResetComponent } from './components/form-reset/form-reset.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'e-wallet';
  
  constructor(@Optional() public dialogRef: MatDialogRef<formResetComponent>,
   @Inject(MAT_DIALOG_DATA) public message: string){}
  
}
