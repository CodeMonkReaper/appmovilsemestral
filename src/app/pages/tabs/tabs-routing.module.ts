import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [  {
      path: 'mis-viajes',
      loadChildren: () => import('./../../pages/mis-viajes/mis-viajes.module').then( m => m.MisViajesPageModule)
    },
    {
      path: 'programar-viaje',
      loadChildren: () => import('./../../pages/programar-viaje/programar-viaje.module').then( m => m.ProgramarViajePageModule)
    },
    {
      path: 'conductores-disp',
      loadChildren: () => import('./../../pages/conductores-disp/conductores-disp.module').then( m => m.ConductoresDispPageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
