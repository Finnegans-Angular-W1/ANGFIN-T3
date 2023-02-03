import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component'; 
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [  
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




