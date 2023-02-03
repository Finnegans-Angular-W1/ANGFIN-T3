import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,RouterModule,

    MaterialModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    SideBarComponent
  ]
})
export class SharedModule { }
