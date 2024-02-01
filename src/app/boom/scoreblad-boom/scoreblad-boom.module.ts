import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorebladBoomPageRoutingModule } from './scoreblad-boom-routing.module';

import { ScorebladBoomPage } from './scoreblad-boom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorebladBoomPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScorebladBoomPage]
})
export class ScorebladBoomPageModule {}
