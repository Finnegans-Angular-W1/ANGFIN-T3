import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,

    MaterialModule
  ],
  exports: [
    MaterialModule,

    SideBarComponent
  ]
})
export class SharedModule { }
