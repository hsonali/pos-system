import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponentComponent } from '../modal-component/modal-component.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Input() products: any;
  @Input() productLength: number = 0;
  // inputnumber = 1;
  totalItems = 0;
  @Input() total: number = 0;
  noProducts:boolean = true;
  subtotal:any;
  vat: number = 0.10;
  discount:number = 0.20;
  vat1 = 0;
  discount1 = 0;

  @ViewChild('modal', { static: false })
  modal!: ModalComponentComponent;

  openModal() {
    this.modal.open();
  }
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    console.log("left", this.products);
    // this.subtotal = this.ps.subTotal(this.products);
    this.subtotal = this.getSubtotal();
    console.log("init",this.ps.subTotal(this.products));
    // this.total = price*this.inputnumber;

    this.totalItems = this.getItemCount();
  }
  
  
  plus(item:any) {
    item.quantity++;
    this.subtotal = this.getSubtotal();
    this.totalItems = this.getItemCount();
  }

  minus(item:any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
    this.subtotal = this.getSubtotal();
    this.totalItems = this.getItemCount();
  }
  removeProduct(product:any){
      this.products.map((a:any, index: any)=> {
        if(product.name === a.name){
          this.products.splice(index,1);
        }
      })
      console.log(this.products);
      this.subtotal = this.getSubtotal();
    this.totalItems = this.getItemCount();
    }
  clearAll(){
    this.vat1 = this.vat;
    this.discount1 = this.discount;
    this.productLength = 0;
    this.products.length = 0;
    this.noProducts = true;
    this.subtotal = 0;
    this.vat = this.vat1;
    this.discount = this.discount1;
    this.totalItems = 0;
    console.log(this.noProducts);
  }

  getItemCount(){
    return this.products.reduce((totalItems: any,item: any)=>{
      totalItems += item.quantity;
      return totalItems;
    }, 0);
  }

  getSubtotal(){
    return this.products.reduce(function(subtotal: any, item: { quantity: number; price: number; }) {
      subtotal += (item.quantity * item.price);
      console.log(subtotal);
      return subtotal;
    }, 0);
  }
}
