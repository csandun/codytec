import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "./article-page.component";



const routes: Routes = [
  {path:'', component: ArticlePageComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ArticlePageRoutingModule { }

