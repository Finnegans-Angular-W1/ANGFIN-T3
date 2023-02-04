import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    SideBarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SharedRoutingModule,
    SideBarComponent,
    LoadingComponent,
  ]
})
export class SharedModule { }
