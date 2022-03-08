import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import {ArticleModule} from "../../features/article/article.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ArticleModule,
    SharedModule
  ]
})
export class HomePageModule { }
