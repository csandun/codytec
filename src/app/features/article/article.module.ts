import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFeedComponent } from './components/article-feed/article-feed.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleListItemComponent } from './components/article-list-item/article-list-item.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ArticleAuthorInfoboxComponent } from './components/article-author-infobox/article-author-infobox.component';



@NgModule({
  declarations: [
    ArticleFeedComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    ArticleFormComponent,
    ArticleAuthorInfoboxComponent
  ],
  exports: [
    ArticleFeedComponent,
    ArticleFormComponent,
    ArticleAuthorInfoboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ArticleModule { }
