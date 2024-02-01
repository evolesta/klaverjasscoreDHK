import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartBoomPageRoutingModule } from './start-boom-routing.module';

import { StartBoomPage } from './start-boom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartBoomPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StartBoomPage]
})
export class StartBoomPageModule {}
