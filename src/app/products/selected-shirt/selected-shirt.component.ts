import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../shared/product';

@Component({
  selector: 'app-selected-shirt',
  templateUrl: './selected-shirt.component.html',
  styleUrls: ['./selected-shirt.component.css']
})
export class SelectedShirtComponent  {

  @Input()
  SelectedShirt : IProduct;
 
  @Input()
  SelectedTie : IProduct = null;
  
  @Input()
  SelectedCuff : IProduct = null;
  
  constructor() { 
  }
}
