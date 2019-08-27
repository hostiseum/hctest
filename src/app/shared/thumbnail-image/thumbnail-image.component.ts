import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'app-thumbnail-image',
  templateUrl: './thumbnail-image.component.html',
  styleUrls: ['./thumbnail-image.component.css']
})
export class ThumbnailImageComponent implements OnInit {

@Input()
product : IProduct;

@Output()
notify : EventEmitter<IProduct> = new EventEmitter<IProduct>(); 

  constructor() { 
  }

  ngOnInit() {
  }


  onImageClick(): void {
    this.notify.emit(this.product);
  }

}
