import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    SharedRoutingModule,
    SideBarComponent
  ]
})
export class SharedModule { }
