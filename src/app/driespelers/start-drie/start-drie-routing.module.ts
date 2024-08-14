import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartDriePage } from './start-drie.page';

const routes: Routes = [
  {
    path: '',
    component: StartDriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartDriePageRoutingModule {}
