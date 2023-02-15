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
  @Input() totalItems = 0;
  @Input() total: number = 0;
  @Input() subtotal: any;
  vat: number = 0.10;
  discount: number = 0.20;
  vat1 = 0;
  discount1 = 0;

  @ViewChild('modal', { static: false })
  modal!: ModalComponentComponent;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.subtotal = this.ps.getSubtotal(this.products);
    this.totalItems = this.ps.getItemCount(this.products);
  }

  //Open Receipt Modal
  openModal() {
    this.modal.open();
  }

  //Increment Quantity
  plus(item: any) {
    item.quantity++;
    this.subtotal = this.ps.getSubtotal(this.products);
    this.totalItems = this.ps.getItemCount(this.products);
  }

  //Decrement Quantity
  minus(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
    this.subtotal = this.ps.getSubtotal(this.products);
    this.totalItems = this.ps.getItemCount(this.products);
  }

  //Delete a single product
  removeProduct(product: any) {
    this.products.map((a: any, index: any) => {
      if (product.name === a.name) {
        this.products.splice(index, 1);
      }
    })
    this.subtotal = this.ps.getSubtotal(this.products);
    this.totalItems = this.ps.getItemCount(this.products);
    this.productLength = this.products.length;
  }

  //Reset the page 
  clearAll = () => {
    this.vat1 = this.vat;
    this.discount1 = this.discount;
    this.productLength = 0;
    this.products.length = 0;
    this.subtotal = 0;
    this.vat = this.vat1;
    this.discount = this.discount1;
    this.totalItems = 0;
  }
}
