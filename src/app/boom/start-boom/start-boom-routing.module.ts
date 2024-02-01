import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartBoomPage } from './start-boom.page';

const routes: Routes = [
  {
    path: '',
    component: StartBoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartBoomPageRoutingModule {}
