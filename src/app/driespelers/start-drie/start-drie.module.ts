import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartDriePageRoutingModule } from './start-drie-routing.module';

import { StartDriePage } from './start-drie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartDriePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StartDriePage]
})
export class StartDriePageModule {}
