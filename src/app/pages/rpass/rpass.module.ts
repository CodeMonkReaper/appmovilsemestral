import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpassPageRoutingModule } from './rpass-routing.module';

import { RpassPage } from './rpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpassPageRoutingModule
  ],
  declarations: [RpassPage]
})
export class RpassPageModule {}
