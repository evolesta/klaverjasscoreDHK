import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start-boom',
    loadChildren: () => import('./boom/start-boom/start-boom.module').then( m => m.StartBoomPageModule)
  },
  {
    path: 'scoreblad-boom',
    loadChildren: () => import('./boom/scoreblad-boom/scoreblad-boom.module').then( m => m.ScorebladBoomPageModule)
  },
  {
    path: 'telhulp',
    loadChildren: () => import('./boom/telhulp/telhulp.module').then( m => m.TelhulpPageModule)
  },
  {
    path: 'start-drie',
    loadChildren: () => import('./driespelers/start-drie/start-drie.module').then( m => m.StartDriePageModule)
  },
  {
    path: 'historie',
    loadChildren: () => import('./historie/historie.module').then( m => m.HistoriePageModule)
  },
  {
    path: 'drie-scoreblad',
    loadChildren: () => import('./driespelers/drie-scoreblad/drie-scoreblad.module').then( m => m.DrieScorebladPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
