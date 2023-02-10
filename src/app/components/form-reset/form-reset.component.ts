import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators , FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.scss']
})
export class formResetComponent implements OnInit {

  passwordVisibility = false;
  inputControl = new FormControl('');


  validateForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<formResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    /* this.inputControl.valueChanges.subscribe(value => {
      console.log(value);
    }); */
  }

  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  closeModal() {
    this.dialogRef.close();
  }

  submitForm() {
    console.log( this.inputControl.value);
  }

}
