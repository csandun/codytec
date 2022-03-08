import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFeedComponent } from './components/article-feed/article-feed.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleListItemComponent } from './components/article-list-item/article-list-item.component';



@NgModule({
  declarations: [
    ArticleFeedComponent,
    ArticleListComponent,
    ArticleListItemComponent
  ],
  exports: [
    ArticleFeedComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ArticleModule { }
