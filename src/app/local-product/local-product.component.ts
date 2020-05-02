import { Component, OnInit } from '@angular/core';
import { LocalProductService } from './local-product.service';
import { ProductInterface } from './product.interface';

@Component({
  selector: 'app-local-product',
  templateUrl: './local-product.component.html',
  styleUrls: ['./local-product.component.css']
})
export class LocalProductComponent implements OnInit {
  product: ProductInterface;
  new_product: ProductInterface;
  products: ProductInterface[];

  constructor(private localProductService: LocalProductService) { }

  ngOnInit(): void {
  }

  getProducts(): void{
    this.localProductService.getProducts()
    .subscribe(response => this.products = response);
  }

  getProduct(in_productid: string): void{
    this.localProductService.getProduct(in_productid)
    .subscribe(response => this.product = response);

  }

  postProduct(product_id: string, product_name: string): void{
    this.new_product = {product_id, product_name};
    console.log(this.new_product);
    this.localProductService.postProduct(this.new_product)
    .subscribe(res => console.log(res));
  }

}
