import { Injectable } from '@angular/core';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {




  getShirts(): IProduct[]{
    return [
        {"productId" : 1,
        "productName" : "Blue checks white Shirt",
        "imageUrl" : "assets/shirts/s001.jpg",
        "productType" : "shirt"
        },
        {"productId" : 2,
        "productName" : "Pink Shirt",
        "imageUrl" : "assets/shirts/s002.jpg",
        "productType" : "shirt"
        },
        {"productId" : 3,
        "productName" : "Navi Blue Shirt",
        "imageUrl" : "assets/shirts/s003.jpg",
        "productType" : "shirt"
        },
        {"productId" : 4,
        "productName" : "Blue Plain Shirt",
        "imageUrl" : "assets/shirts/s004.jpg",
        "productType" : "shirt"
        }

    ];
  }
  getTies(): IProduct[]{
    return [
        {"productId" : 1,
        "productName" : "Navi Blue tie",
        "imageUrl" : "assets/ties/t001.png",
        "productType" : "tie"
        },
        {"productId" : 2,
        "productName" : "Blue tie",
        "imageUrl" : "assets/ties/t002.png",
        "productType" : "tie"
        },
        {"productId" : 3,
        "productName" : "Blue tie1",
        "imageUrl" : "assets/ties/t003.png",
        "productType" : "tie"
        },
        {"productId" : 4,
        "productName" : "Blue tie2",
        "imageUrl" : "assets/ties/t004.png",
        "productType" : "tie"
        }

    ];
  }

  getSelectedShirt() : IProduct{
    return   { "productId" : 1,
    "productName" : "Blue checks white Shirt",
    "imageUrl" : "assets/shirts/s001.jpg",
    "productType" : "shirt"
    }
  }
  

  getSelectedTie() : IProduct{
    return   {"productId" : 3,
    "productName" : "Red tie",
    "imageUrl" : "assets/ties/t003.png",
    "productType" : "tie"
    }
  }
}
