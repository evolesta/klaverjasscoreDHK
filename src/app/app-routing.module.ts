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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
