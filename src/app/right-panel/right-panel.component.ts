import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  subtotal: any;
  products: any;
  @Output() getData = new EventEmitter<any>();
  @Output() subTotalAmount = new EventEmitter<any>();

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.products = this.ps.getAll();
    this.subtotal = this.ps.getSubtotal(this.products);
  }

  //Add product on right panel image click
  addProduct(data: any) {
    this.subtotal = this.ps.getSubtotal(this.products);
    this.getData.emit(data);
    this.subTotalAmount.emit(this.subtotal);
  }
}
