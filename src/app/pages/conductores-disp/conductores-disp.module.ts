import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresDispPageRoutingModule } from './conductores-disp-routing.module';

import { ConductoresDispPage } from './conductores-disp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresDispPageRoutingModule
  ],
  declarations: [ConductoresDispPage]
})
export class ConductoresDispPageModule {}
