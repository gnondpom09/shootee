import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModelsPage } from './models';

@NgModule({
  declarations: [
    ModelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModelsPage),
  ],
})
export class ModelsPageModule {}
