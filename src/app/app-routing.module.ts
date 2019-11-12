import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: './pages/auth/register/register.module#RegisterPageModule',
  },
  {
    path: 'login',
    loadChildren: './pages/auth/login/login.module#LoginPageModule',
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/main/main.module#MainPageModule',
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
  },
  {
    path: 'account/manage-vehicle',
    loadChildren:
      './pages/manage-vehicle/manage-vehicle.module#ManageVehiclePageModule',
  },
  {
    path: 'account/manage-place',
    loadChildren:
      './pages/manage-place/manage-place.module#ManagePlacePageModule',
  },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  {
    path: 'history',
    loadChildren: './pages/history/history.module#HistoryPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
