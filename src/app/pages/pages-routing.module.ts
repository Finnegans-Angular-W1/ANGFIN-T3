import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AuthRoutingModule } from './auth/auth-login-routing.module';
import { AuthGuard } from '../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home', 
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
