import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonArtifactsRoutingModule } from './common-artifacts-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavigationBarComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CommonArtifactsRoutingModule
  ],
  exports:[NavigationBarComponent,FooterComponent]
})
export class CommonArtifactsModule { }
