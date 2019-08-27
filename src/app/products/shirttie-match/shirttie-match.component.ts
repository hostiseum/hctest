import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../shared/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shirttie-match',
  templateUrl: './shirttie-match.component.html',
  styleUrls: ['./shirttie-match.component.css']
})
export class ShirttieMatchComponent implements OnInit {

 shirts : IProduct[];
 ties : IProduct[];

 selectedShirt : IProduct;
 selectedTie : IProduct;
  
  constructor(private productService : ProductService) {
    this.selectedShirt = this.productService.getSelectedShirt();
  }

  ngOnInit() {
    this.shirts = this.productService.getShirts(); 
    this.ties = this.productService.getTies(); 

    
    
  }

  onTieSelectionChanged(tie: IProduct){
    this.selectedTie = tie;
  }

  onShirtSelectionChanged(shirt: IProduct){
    this.selectedShirt = shirt;
  }
}
