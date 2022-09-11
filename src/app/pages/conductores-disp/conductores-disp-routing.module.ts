import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductoresDispPage } from './conductores-disp.page';

const routes: Routes = [
  {
    path: '',
    component: ConductoresDispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductoresDispPageRoutingModule {}
