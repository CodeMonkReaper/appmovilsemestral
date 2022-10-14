import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTravelPageRoutingModule } from './update-travel-routing.module';

import { UpdateTravelPage } from './update-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTravelPageRoutingModule
  ],
  declarations: [UpdateTravelPage]
})
export class UpdateTravelPageModule {}
