import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'parking',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'history',
        loadChildren: '../history/history.module#HistoryPageModule',
      },

      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
