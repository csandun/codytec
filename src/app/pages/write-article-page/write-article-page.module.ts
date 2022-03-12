import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteArticlePageComponent } from './write-article-page.component';
import {WriteArticlePageRoutingModule} from "./write-article-page-routing.module";
import {ArticleModule} from "../../features/article/article.module";



@NgModule({
  declarations: [
    WriteArticlePageComponent
  ],
  imports: [
    CommonModule,
    WriteArticlePageRoutingModule,
    ArticleModule
  ]
})
export class WriteArticlePageModule { }
