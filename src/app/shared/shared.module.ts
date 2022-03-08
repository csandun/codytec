import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationComponent } from './components/app-pagination/app-pagination.component';
import { AppTagCloudComponent } from './components/app-tag-cloud/app-tag-cloud.component';
import { AppTagCloudTagComponent } from './components/app-tag-cloud-tag/app-tag-cloud-tag.component';



@NgModule({
  declarations: [
    AppPaginationComponent,
    AppTagCloudComponent,
    AppTagCloudTagComponent
  ],
  exports: [
    AppTagCloudComponent,
    AppPaginationComponent,
    AppTagCloudTagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
