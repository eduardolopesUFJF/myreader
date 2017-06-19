import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalComponent } from './modal';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    IonicPageModule.forChild(ModalComponent),
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalComponentModule {}
