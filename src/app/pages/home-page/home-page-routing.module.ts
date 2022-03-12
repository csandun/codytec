import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "../article-page/article-page.component";

const routes: Routes = [
  {path:'', component: ArticlePageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
