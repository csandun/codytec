import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WriteArticlePageComponent} from "./write-article-page.component";



const routes: Routes = [
  {path:'', component: WriteArticlePageComponent}
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class WriteArticlePageRoutingModule { }

