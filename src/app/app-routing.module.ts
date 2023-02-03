import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; 
import { PageNotFoundRoutingModule } from './pages/page-not-found/page-not-found-routing.module'; 
const routes: Routes = [  
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PageNotFoundRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { } 