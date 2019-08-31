import { Injectable } from '@angular/core';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getShirts(): IProduct[]{
    return [
        {"productId" : "s001",
        "productName" : "Blue checks white Shirt",
        "imageUrl" : "assets/shirts/s001.jpg",
        "fullImageUrl" : "assets/shirts/s001.jpg",
        "productType" : "shirt",
        "price":50,
        "properties":["100% cotton", "Dobby weave"]
        },
        {"productId" : "s002",
        "productName" : "Pink Shirt",
        "imageUrl" : "assets/shirts/s002.jpg",
        "fullImageUrl" : "assets/shirts/s001.jpg",
        "productType" : "shirt",
        "price":60,
        "properties":["100% cotton", "Dobby weave"]
        },
        {"productId" : "s003",
        "productName" : "Navi Blue Shirt",
        "imageUrl" : "assets/shirts/s003.jpg",
        "fullImageUrl" : "assets/shirts/s001.jpg",
        "productType" : "shirt",
        "price":55,
        "properties":["100% cotton", "Dobby weave"]
        },
        {"productId" : "s004",
        "productName" : "Blue Plain Shirt",
        "imageUrl" : "assets/shirts/s004.jpg",
        "fullImageUrl" : "assets/shirts/s001.jpg",
        "productType" : "shirt",
        "price":61,
        "properties":["100% cotton", "Dobby weave"]
        }

    ];
  }
  getTies(): IProduct[]{
    return [
        {"productId" : "t001",
        "productName" : "Green multi floral English luxury tie",
        "imageUrl" : "assets/ties/t001.jpg",
        "fullImageUrl" : "assets/ties/t001_tie.png",
        "productType" : "tie",
        "price":61,
        "properties":["100% silk", "6.5cm blade width", "Hand finished", "145cm", "Dry clean only"]
        },
        {"productId" : "t002",
        "productName" : "Orange silk geometric square",
        "imageUrl" : "assets/ties/t002.jpg",
        "fullImageUrl" : "assets/ties/t002_tie.png",
        "productType" : "tie",
        "price":49.95,
        "properties":["100% silk", "Woven in England", "8cm blade width", "Made in England", "149cm"]
        },
        {"productId" :  "t003",
        "productName" : "Purple and white spot silk slim tie",
        "imageUrl" : "assets/ties/t003.jpg",
        "fullImageUrl" : "assets/ties/t003_tie.png",
        "productType" : "tie",
        "price":61,
        "properties":["100% silk", "Woven in England", "8cm blade width", "Made in England", "149cm"]
        },
        {"productId" :  "t004",
        "productName" : "Yellow and navy stripe luxury Greadine Italian tie",
        "imageUrl" : "assets/ties/t004.jpg",
        "fullImageUrl" : "assets/ties/t004_tie.png",
        "productType" : "tie",
        "price":61,
        "properties":["100% silk", "Woven in England", "8cm blade width", "Made in England", "149cm"]
        }

    ];
  }

  getCuffs(): IProduct[]{
    return [
        {"productId" : "c001",
        "productName" : "Angique silver domed sixpence cufflinks",
        "imageUrl" : "assets/cuffs/c001_full.jpg",
        "fullImageUrl" : "assets/cuffs/c001.png",
        "productType" : "cuff",
        "price":39.95,
        "properties":["Silver plated", "Supplied in a cufflink box", "Charles Tyrwhitt logo on reverse", "Wipe with a damp cloth"]
        },
        {"productId" : "c002",
        "productName" : "Navy gradient enamel oval cufflinks",
        "imageUrl" : "assets/cuffs/c002.jpg",
        "fullImageUrl" : "assets/cuffs/c002_full.png",
        "productType" : "cuff",
        "price":61,
        "properties":["Rhodium & gold plated with antique finish", "Supplied in a cufflink box", "Charles Tyrwhitt logo on the reverse", "Wipe with a damp cloth"]
        },
        {"productId" : "c003",
        "productName" : "Angtique silver and gold propeller cufflinks",
        "imageUrl" : "assets/cuffs/c003.jpg",
        "fullImageUrl" : "assets/cuffs/c003_full.png",
        "productType" : "cuff",
        "price":61,
        "properties":["Rhodium & gold plated with antique finish", "Supplied in a cufflink box", "Charles Tyrwhitt logo on the reverse", "Wipe with a damp cloth"]
        },
        {"productId" : "c004",
        "productName" : "Navy herringbone silk cufflinks",
        "imageUrl" : "assets/cuffs/c004.jpg",
        "fullImageUrl" : "assets/cuffs/c004_full.png",
        "productType" : "cuff",
        "price":19.95,
        "properties":["Plated with silk insert", "Supplied in a cufflink box", "Charles Tyrwhitt logo on the reverese", "Wipe with a damp cloth"]
        },

    ];
  }
}
