import { Component, OnInit } from '@angular/core';
import { Product } from './model/Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ps: ProductService){}
  found:boolean = true;
  productData: Product = new Product;
  products: Product[] = [];
  productItems: Product[] = [];
  productObj: {} = {};
  productLength: number = 0;
  productName:any;
  total : number = 0;
  amount: any;
  subtotal:any;
  totalItems:number = 0;
  
  getProductData(data:any){
    this.productLength++;
    this.productData.name = data.name;
    this.productData.price = data.price;
    this.productData.quantity = data.quantity;
    this.productData.category = data.category;
    this.productData.description = data.description;
    this.productData.image = data.image;
    this.total = parseInt(this.productData.price)*1;
    
    this.productItems.push(Object.assign({}, this.productData));
    this.products = [...new Set(this.productItems)];

  this.subtotal = this.ps.getSubtotal(this.products);
  this.totalItems = this.ps.getItemCount(this.products);
    console.log("App",this.products);
  }

  // getsubTotalAmount(amount:any){
  //   this.amount = amount;
  // }
  
  ngOnInit(): void {
    this.productLength = this.products.length;
    this.subtotal = this.ps.getSubtotal(this.products);
    this.totalItems = this.ps.getItemCount(this.products);
  }
  
}
