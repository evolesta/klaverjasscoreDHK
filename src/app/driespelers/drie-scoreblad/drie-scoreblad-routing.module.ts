import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrieScorebladPage } from './drie-scoreblad.page';

const routes: Routes = [
  {
    path: '',
    component: DrieScorebladPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrieScorebladPageRoutingModule {}
