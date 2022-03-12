import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationComponent } from './components/app-pagination/app-pagination.component';
import { AppTagCloudComponent } from './components/app-tag-cloud/app-tag-cloud.component';
import { AppTagCloudTagComponent } from './components/app-tag-cloud-tag/app-tag-cloud-tag.component';
import { AppSocialButtonsComponent } from './components/app-social-buttons/app-social-buttons.component';
import { AppModalComponent } from './components/app-modal/app-modal.component';



@NgModule({
  declarations: [
    AppPaginationComponent,
    AppTagCloudComponent,
    AppTagCloudTagComponent,
    AppSocialButtonsComponent,
    AppModalComponent
  ],
  exports: [
    AppTagCloudComponent,
    AppPaginationComponent,
    AppTagCloudTagComponent,
    AppSocialButtonsComponent,
    AppModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
