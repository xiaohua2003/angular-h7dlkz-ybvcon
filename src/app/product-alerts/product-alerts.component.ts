import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input('productChild') product!:Product;
  @Output() priceNotify=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.priceNotify.emit(this.product.price)
  }
}
