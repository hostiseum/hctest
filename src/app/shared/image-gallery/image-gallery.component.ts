import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../../products/product.service';
import { NgbSlideEvent, NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.togglePaused();
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  @Input()
  products : IProduct[];
  
  @Input()
  direction: string = "Horizantal";

  selectedProduct : IProduct;

  @Output() selectedProductChanged : EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private productService : ProductService ) {
   
   }

   togglePaused() {
      this.carousel.pause();
  }

   onSlide(slideEvent: NgbSlideEvent) {
    this.selectedProduct = this.products.find((e)=> e.productId == slideEvent.current);
    this.selectedProductChanged.emit(this.selectedProduct);
  }
}
