import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutPageComponent} from "./about-page.component";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {path: '', component: AboutPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule

  ],
  exports: [RouterModule]
})
export class AboutPageRoutingModule {
}
