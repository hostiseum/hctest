import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import {NgbModule, NgbCarouselModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ImageGalleryComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],

  exports:[
    ImageGalleryComponent,
    NgbCarousel,
  ]
})
export class SharedModule { }
