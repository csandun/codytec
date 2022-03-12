import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./pages/article-page/article-page.module').then(m => m.ArticlePageModule)
  },
  {
    path: 'new-article',
    loadChildren: () => import('./pages/write-article-page/write-article-page.module').then(m => m.WriteArticlePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
