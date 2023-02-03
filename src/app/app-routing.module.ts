import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './pages/auth/auth-login-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [  

  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
