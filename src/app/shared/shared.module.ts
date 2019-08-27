import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ThumbnailImageComponent } from './thumbnail-image/thumbnail-image.component';



@NgModule({
  declarations: [
    ImageGalleryComponent,
    ThumbnailImageComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ImageGalleryComponent,
    ThumbnailImageComponent
  ]
})
export class SharedModule { }
