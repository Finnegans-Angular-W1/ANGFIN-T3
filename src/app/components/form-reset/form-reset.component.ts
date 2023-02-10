import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.scss']
})
export class formResetComponent implements OnInit {
  passwordValue: string = "";
  passwordVisibility = false;

  constructor(
    public dialogRef: MatDialogRef<formResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  closeModal() {
    this.dialogRef.close();
  }

  submitForm() {
    console.log(this.passwordValue);
  }

}
