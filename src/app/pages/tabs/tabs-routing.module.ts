import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('../inicio/inicio.module').then(x => x.InicioPageModule)
      },
      {
        path: 'action-sheet',
        loadChildren: () => import('../action-sheet/action-sheet.module').then(x => x.ActionSheetPageModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('../cards/cards.module').then(x => x.CardsPageModule)
      },
      {
        path: 'datas',
        loadChildren: () => import('../datas/datas.module').then(x => x.DatasPageModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert.module').then(x => x.AlertPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
