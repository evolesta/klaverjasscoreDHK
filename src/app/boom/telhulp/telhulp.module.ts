import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelhulpPageRoutingModule } from './telhulp-routing.module';

import { TelhulpPage } from './telhulp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelhulpPageRoutingModule
  ],
  declarations: [TelhulpPage]
})
export class TelhulpPageModule {}
