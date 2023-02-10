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
  password = new FormControl('');
  userId = "";

  validateForm:any = this.fb.group({
    password: ['', [ Validators.minLength(6) , Validators.required]]
  })

  constructor(
    private httpService:HttpService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<formResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.password.valueChanges.subscribe((event:any) => { console.log(this.validateForm)})
    this.httpService.get<any>(`${environment.URL_BASE}/auth/me`).subscribe((date:any) => {
      console.log(date)
      this.userId = date.id

    })
  }

  /* /users/resetPassword/userId */
  submitForm() {
    this.httpService.get<any>(`${environment.URL_BASE}/users/resetPassword/${this.userId}`).subscribe((date:any) => {
      console.log(date)
    }) 
    console.log( this.password.value);
    console.log( this.userId);
  }
  
  togglePasswordVisibility() {
    this.passwordVisibility = !this.passwordVisibility;
  }
  
  closeModal() {
    this.dialogRef.close();
  }
  getErrorMessage(input: string) {
    const control = this.validateForm.controls[input];
    if (!control) {
      return '';
    }
    if (control.hasError('required')) {
      return `${input} es requerido`;
    }
    return `${input} debe poseer minimo 6 caracteres`
  }
}
