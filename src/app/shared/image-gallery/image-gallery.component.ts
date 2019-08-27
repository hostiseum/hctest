import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {

  @Input()
  products : IProduct[];
  
  @Input()
  direction: string = "Horizantal";

  selectedProduct : IProduct;

  @Output() selectedProductChanged : EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private productService : ProductService ) { }

  onNotify(product : IProduct): void{
    this.selectedProduct  = product;
    this.selectedProductChanged.emit(this.selectedProduct);
  }
}
