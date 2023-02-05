import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { TitleComponent } from './title/title.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinksComponent } from './footer/nav-links/nav-links.component';


@NgModule({
  declarations: [
    SideBarComponent,
    LoadingComponent,
    TitleComponent,
    FooterComponent,
    NavLinksComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    SharedRoutingModule,
    SideBarComponent,
    LoadingComponent,
    TitleComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
