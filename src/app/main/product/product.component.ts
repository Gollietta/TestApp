import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './product.service';
import { ProductInterface } from './product.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddDialogComponent } from './product-add-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductInterface;
  new_product: ProductInterface;
  products: ProductInterface[];

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  openProductAddDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {title: 'Hello World!'};
    dialogConfig.height = '900px';
    dialogConfig.width = '1500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    // NOTE: Must have prebuilt-themes imported in style.css or dialog will be shown at bottom of page.
    let dialogRef = this.dialog.open(ProductAddDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    });
  }

  ngOnInit(): void {
  }

  getProducts(): void{
    this.productService.getProducts()
    .subscribe(response => this.products = response);
  }

  getProduct(productid: string): void{
    this.productService.getProduct(productid)
    .subscribe(response => this.product = response);

  }

  addProduct(): void{

  }

  editProduct(_id: string): void{
    console.log(_id);
  }

  deleteProduct(_id: string): void{

  }

  postProduct(product_id: string, product_name: string): void{
    this.new_product = {product_id, product_name};
    console.log(this.new_product);
    this.productService.postProduct(this.new_product)
    .subscribe(res => console.log(res));
  }

}
