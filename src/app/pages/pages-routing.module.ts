import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../core/guards/auth/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home', 
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthGuard],
  },
  {
    path:'perfil',
    component: PerfilComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
