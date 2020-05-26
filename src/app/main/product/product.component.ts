import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './product.service';
import { ProductInterface } from './product.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddDialogComponent } from './product-add-dialog.component';
import { ProductDeleteDialogComponent } from './product-delete-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductInterface;
  new_product: ProductInterface;
  products: ProductInterface[];
  recent_keyword: string;

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchProducts("");
  }

  openProductAddDialog(){
    const dialogConfig = new MatDialogConfig();
    let returned_data: any;

    dialogConfig.data = {title: 'Hello World!'};
    dialogConfig.height = '900px';
    dialogConfig.width = '1500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    // NOTE: Must have prebuilt-themes imported in style.css or dialog will be shown at bottom of page.
    let dialogRef = this.dialog.open(ProductAddDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      if(!value){
        console.log("Cancel button is clicked.");//TEST
      }
      else{
        console.log("Save button is clicked.");//TEST
        console.log(value);//TEST
        this.postProduct(value.product_id, value.product_name);
      }
    });

  }

  openProductDeleteDialog(_id: string, product_id: string, product_name:string){
    const dialogConfig = new MatDialogConfig();
    let returned_data: any;

    dialogConfig.data = {'product_id': product_id, 'product_name': product_name};
    dialogConfig.height = '230px';
    dialogConfig.width = '1500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    // NOTE: Must have prebuilt-themes imported in style.css or dialog will be shown at bottom of page.
    let dialogRef = this.dialog.open(ProductDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      if(!value){
        console.log("Cancel button is clicked.");//TEST
      }
      else{
        console.log("Delete button is clicked.");//TEST
        this.deleteProduct(_id);
      }
    });

  }

  filterProducts(keyword: string){
    this.recent_keyword = keyword;
    this.searchProducts(keyword);
  }

  searchProducts(keyword: string): void{
    //this.recent_keyword = keyword;
    this.productService.searchProducts(keyword)
    .subscribe(response => this.products = response);
  }

  getProduct(product_id: string): void{
    this.productService.getProduct(product_id)
    .subscribe(response => this.product = response);

  }

  editProduct(_id: string): void{
    console.log(_id);
  }

  deleteProduct(_id: string): void{
    this.productService.deleteProduct(_id)
    .subscribe(response => {
      this.product = response;
      this.searchProducts(this.recent_keyword);
    });
  }

  postProduct(product_id: string, product_name: string): void{
    this.new_product = {product_id, product_name};
    console.log(this.new_product);
    this.productService.postProduct(this.new_product)
    .subscribe(res => {
      console.log(res);
      this.searchProducts(this.recent_keyword);
    });
  }

}
