import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import {AppRoutingModule} from "../../app-routing.module";
import {AboutPageRoutingModule} from "./about-page-routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    SharedModule
  ],
})
export class AboutPageModule { }
