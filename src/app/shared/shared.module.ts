import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ThumbnailImageComponent } from './thumbnail-image/thumbnail-image.component';
import {NgbModule, NgbCarouselModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ImageGalleryComponent,
    ThumbnailImageComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],

  exports:[
    ImageGalleryComponent,
    ThumbnailImageComponent,
    NgbCarousel,
  ]
})
export class SharedModule { }
