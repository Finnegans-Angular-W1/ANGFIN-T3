import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    SideBarComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    SharedRoutingModule,
    SideBarComponent,
    TitleComponent,
  ]
})
export class SharedModule { }
