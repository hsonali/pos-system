import { Injectable } from '@angular/core';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      "name": "computer",
      "price": "130",
      "quantity" : 1,
      "category": "computers",
      "description": "Acer computer with RAM and graphics card",
      "image": "assets/images/computer.jfif"
    },
    {
      "name": "sweater",
      "price": "1",
      "quantity" : 1,
      "category": "Clothing",
      "description": "fashion, clothes , sweater, wool, cardigan,...",
      "image": "assets/images/sweater.jpg"
    },
    {
      "name": "tie",
      "price": "46",
      "quantity" : 1,
      "category": "Clothing",
      "description": "fashion, tie, clothes, accessory , accessoire,...",
      "image": "assets/images/tie.jfif"
    },
    {
      "name": "jacket",
      "price": "190",
      "quantity" : 1,
      "category": "Clothing",
      "description": "winter jacket ",
      "image": "assets/images/jacket.jfif"
    },
    {
      "name": "shirt",
      "price": "60",
      "quantity" : 1,
      "category": "Clothing",
      "description": "casual shirt",
      "image": "assets/images/shirt.jfif"
    },
    {
      "name": "shoes",
      "price": "80",
      "quantity" : 1,
      "category": "Footwear",
      "description": "casual shoes",
      "image": "assets/images/shoes.jfif"
    },
    {
      "name": "pants",
      "price": "100",
      "quantity" : 1,
      "category": "Fashion",
      "description": "casual pants",
      "image": "assets/images/pants.jfif"
    },
    {
      "name": "mobile",
      "price": "800",
      "quantity" : 1,
      "category": "Electronics",
      "description": "Smartphones",
      "image": "assets/images/mobile.jfif"
    },
    {
      "name": "Heels",
      "price": "90",
      "quantity" : 1,
      "category": "Footwear",
      "description": "Fancy footwear",
      "image": "assets/images/heels.jfif"
    },
    {
      "name": "watch",
      "price": "500",
      "quantity" : 1,
      "category": "Fashion",
      "description": "Smart watches",
      "image": "assets/images/watch.jfif"
    },
    {
      "name": "TV",
      "price": "1000",
      "quantity" : 1,
      "category": "Electronics",
      "description": "Smart television",
      "image": "assets/images/tv.jfif"
    },
    {
      "name": "sofa",
      "price": "500",
      "quantity" : 1,
      "category": "Furniture",
      "description": "Comfortable sofa sets",
      "image": "assets/images/sofa.jpg"
    },
    {
      "name": "dress",
      "price": "120",
      "quantity" : 1,
      "category": "Fashion",
      "description": "One piece dress",
      "image": "assets/images/dress.jfif"
    },
    {
      "name": "perfume",
      "price": "50",
      "quantity" : 1,
      "category": "Beauty",
      "description": "Organic perfume",
      "image": "assets/images/perfume.jfif"
    },
    {
      "name": "bag",
      "price": "40",
      "quantity" : 1,
      "category": "Accessories",
      "description": "Handbag",
      "image": "assets/images/bag.jfif"
    },
    {
      "name": "book",
      "price": "100",
      "quantity" : 1,
      "category": "Stationary",
      "description": "Galvin OS",
      "image": "assets/images/book.jfif"
    },
    {
      "name": "earring",
      "price": "40",
      "quantity" : 1,
      "category": "Accessories",
      "description": "Jwellery",
      "image": "assets/images/earring.jfif"
    },
  ];
  constructor() { }
  getAll(){
    return this.products;
  }
  getSubtotal(items:Product[]) {
    return items.reduce((subtotal, item ) => {
      subtotal += (item.quantity * parseInt(item.price));
      console.log(subtotal);
      return subtotal;
    }, 0);
  }

  getItemCount(items:Product[]) {
    return items.reduce((totalItems: any, item: any) => {
      totalItems += item.quantity;
      return totalItems;
    }, 0);
  }
}
