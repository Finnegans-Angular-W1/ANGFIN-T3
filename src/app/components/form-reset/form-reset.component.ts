import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators , FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
@Component({
  selector: 'app-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.scss']
})
export class formResetComponent implements OnInit {

  passwordVisibility = false;
  inputControl = new FormControl('');
  userId = "";

  validateForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private httpService:HttpService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<formResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.httpService.get<any>(`${environment.URL_BASE}/auth/me`).subscribe((date:any) => {
      console.log(date)
      this.userId = date.id

    })
  }

  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  closeModal() {
    this.dialogRef.close();
  }
  /* _users_resetPassword__userId_ */
  submitForm() {
     this.httpService.get<any>(`${environment.URL_BASE}/users/resetPassword/${this.userId}`).subscribe((date:any) => {
      console.log(date)
    }) 
    console.log( this.inputControl.value);
    console.log( this.userId);
  }

}
