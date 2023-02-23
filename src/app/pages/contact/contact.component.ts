import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Alert } from 'src/app/core/interfaces/alerts.interface';
import { HttpService } from 'src/app/core/services/http.service';
import { AppState } from 'src/app/core/state/app.state';
import { Contact, } from 'src/app/core/state/auth/interfaces/user.interface';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: Contact[] = [];
  addInport = false;
  form!: FormGroup;

  alert : Alert = {
    err:'Error',
    msg:'',
    buttonOne:true,
    buttonTwo:false
  }

  constructor(public dialog: MatDialog,
    private store: Store<AppState>,
    private http: HttpClient,
    private httpservice: HttpService,
    private fb: FormBuilder
    ) {}

    ngOnInit(): void {
      this.data = this.LocalContact();//data obtiene los contactos del local
  
      this.form = this.fb.group({
        Nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
        userId: ['', [Validators.required, Validators.minLength(3)]]
      });
    }
    
    openDialog(msg:any) {//funcion para generar el dialog de error con un msg personalizado
      this.alert.msg = msg
      this.dialog.open(AlertsComponent, {
        data:this.alert
      });
    }

    openAndClose(): void {//cierra la ventana del form
      this.addInport = !this.addInport;
    }
    
    envio(): void {
      alert('Envio de plata');//aqui iria el formulario para enviar dinero
    }
  
    LocalContact(): Contact[] {//obtine los contactos de localStorage , si no existe se establece un array vacio
      const storeContacts = localStorage.getItem('contactos');
      return storeContacts ? JSON.parse(storeContacts) : [];
    }

    llamadaUsers(): void {//peticion get del usuario y verifica si ya esta en la base o no existe
      const name = this.form.value.Nombre;
      const userId = this.form.value.userId;
      const contacts = this.LocalContact();
    
      this.httpservice.get(`${environment.URL_BASE}/users/${userId}`).subscribe((data: any) => {
        const repeat = contacts.find((contacto: any) => 
          contacto.name === data.first_name && contacto.userId === data.id );

        const message = data.first_name === name
          ? (!repeat ? (contacts.push({ name: data.first_name, userId: userId }), 
                        localStorage.setItem('contactos', JSON.stringify(contacts)), 
                        this.data = contacts)
              : "Usario ya Registrado"
            ): "Usario no Encontrado";
        this.openDialog(message);
      });
    }

    addContact(): void {
      this.llamadaUsers();
      setTimeout(() => {//cierra la ventana del form
        this.openAndClose();
      }, 500);
    }
}

 /*    this.httpservice.get(`${environment.URL_BASE}/users`).subscribe((data: any) => {
        console.log(data);
      }); */