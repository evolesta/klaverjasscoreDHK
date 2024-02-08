import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelhulpPage } from './telhulp.page';

const routes: Routes = [
  {
    path: '',
    component: TelhulpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelhulpPageRoutingModule {}
