import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTravelPage } from './update-travel.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTravelPageRoutingModule {}
