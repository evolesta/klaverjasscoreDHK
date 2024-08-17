import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrieScorebladPageRoutingModule } from './drie-scoreblad-routing.module';

import { DrieScorebladPage } from './drie-scoreblad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrieScorebladPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DrieScorebladPage]
})
export class DrieScorebladPageModule {}
