import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import {ProfilePageRoutingModule} from "./profile-page-routing.module";
import {ProfileModule} from "../../features/profile/profile.module";



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    ProfileModule
  ]
})
export class ProfilePageModule { }
