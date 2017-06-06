import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganisationsPage } from './organisations';

@NgModule({
  declarations: [
    OrganisationsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganisationsPage),
  ],
  exports: [
    OrganisationsPage
  ]
})
export class OrganisationsPageModule {}
