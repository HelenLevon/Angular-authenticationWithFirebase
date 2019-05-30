import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../core/auth.guard';

import { GalleryComponent } from './gallery.component';

const galleryRouterConfig: Routes = [
  
  { path: '', component: GalleryComponent},
  
];

@NgModule({
  imports: [ RouterModule.forChild(galleryRouterConfig)],
  exports: [RouterModule]
})
export class GalleryRoutingModule{

}
