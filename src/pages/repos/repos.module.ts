import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReposPage } from './repos';

@NgModule({
  declarations: [
    ReposPage,
  ],
  imports: [
    IonicPageModule.forChild(ReposPage),
  ],
  exports: [
    ReposPage
  ]
})
export class ReposPageModule {}
