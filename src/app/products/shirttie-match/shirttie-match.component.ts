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
 cuffs : IProduct[];

 selectedShirt : IProduct;
 selectedTie : IProduct;
 selectedCuff : IProduct;
  
  constructor(private productService : ProductService) {
    
  }

  ngOnInit() {
    this.shirts = this.productService.getShirts(); 
    this.ties = this.productService.getTies(); 
    this.cuffs = this.productService.getCuffs(); 
    this.selectedShirt = this.shirts[0];
    this.selectedTie = this.ties[0];
    this.selectedCuff = this.cuffs[0];
  }

  onTieSelectionChanged(tie: IProduct){
    this.selectedTie = tie;
  }

  onCuffSelectionChanged(cuff: IProduct){
    this.selectedCuff = cuff;
  }
}
