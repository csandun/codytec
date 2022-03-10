import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  exports: [
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
