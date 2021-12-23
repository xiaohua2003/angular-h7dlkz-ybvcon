import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {Product, products} from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product|undefined;
  constructor(private route:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    //get the product id 
    const routeParams=this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));
    //Find the product that correspond with the id provided in route
    const getProduct=(product:Product)=>product.id===productIdFromRoute
    this.product=products.find(getProduct)
  }
  addintoCart(product:Product){
   this.cartService.intoCart(product)
   alert('your product has been addedinto the cart')
  }
}
