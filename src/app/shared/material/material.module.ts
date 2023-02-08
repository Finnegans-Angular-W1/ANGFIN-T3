import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
