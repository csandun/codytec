import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
})
export class AboutPageModule { }
