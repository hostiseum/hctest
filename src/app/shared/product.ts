export interface IProduct{
    productId : string;
    productName : string;
    imageUrl : string;
    fullImageUrl : string;
    productType : string;
    price : number;
    properties: string[];
};

// export class Shirt implements IProduct{

//     constructor(public productId : number,
//     public productName : string,
//     public imageUrl : string, public productType: string){
//         productType = "shirt";
//     }
// } 