import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisasComponent } from 'src/app/components/divisas/divisas.component';
import { TipoCambioComponent } from 'src/app/components/tipo-cambio/tipo-cambio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'

const routes: Routes = [

  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistroComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
