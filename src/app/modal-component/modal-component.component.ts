import { DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  @Input() subtotal: number = 0;
  @Input() vat: number = 0;
  @Input() discount: number = 0;
  @Input() totalItems: number = 0;
  @Input() products: any;
  @Input() clearAll: any;
  dateObj: Date = new Date();
  saleNo: any = Math.floor(Math.random() * 100000);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('myModal', { static: false })
  modal!: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
    this.clearAll();
  }
}
