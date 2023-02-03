import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [  

  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule)
  },


import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



export class AppRoutingModule { } 

