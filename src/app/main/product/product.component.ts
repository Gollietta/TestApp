import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './product.service';
import { ProductInterface } from './product.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddDialogComponent } from './product-add-dialog.component';
import { ProductEditDialogComponent } from './product-edit-dialog.component';
import { ProductDeleteDialogComponent } from './product-delete-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
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

    dialogRef.afterClosed().subscribe(new_product => {
      if(!new_product){
        console.log("Cancel button is clicked.");//TEST
      }
      else{
        console.log("Save button is clicked.");//TEST
        console.log(new_product);//TEST
        this.addProduct(new_product);
      }
    });

  }

  openProductEditDialog(_id: string, product_id: string, product_name:string){
    const dialogConfig = new MatDialogConfig();
    let returned_data: any;

    dialogConfig.data = {'product_id': product_id, 'product_name': product_name};
    dialogConfig.height = '900px';
    dialogConfig.width = '1500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    // NOTE: Must have prebuilt-themes imported in style.css or dialog will be shown at bottom of page.
    let dialogRef = this.dialog.open(ProductEditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(edited_product => {
      if(!edited_product){
        console.log("Cancel button is clicked.");//TEST
      }
      else{
        //console.log("Save button is clicked.");//TEST
        //console.log(value);//TEST
        this.editProduct(_id, edited_product);
        
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
    if(!this.recent_keyword){
      this.recent_keyword = "";
    }

    this.productService.searchProducts(keyword)
    .subscribe(response => this.products = response);
  }

  getProduct(product_id: string): void{
    this.productService.getProduct(product_id)
    .subscribe(response => this.product = response);

  }

  addProduct(new_product :ProductInterface): void{
    console.log(new_product);
    this.productService.addProduct(new_product)
    .subscribe(response => {
      console.log(response);
      this.searchProducts(this.recent_keyword);
    });
  }

  editProduct(_id: string, edited_product: ProductInterface): void{
    this.productService.editProduct(_id, edited_product)
    .subscribe(response => {
      console.log(response);//TEST
      console.log(this.recent_keyword);
      this.searchProducts(this.recent_keyword);
    });
  }

  deleteProduct(_id: string): void{
    this.productService.deleteProduct(_id)
    .subscribe(response => {
      this.product = response;
      console.log(this.recent_keyword);
      this.searchProducts(this.recent_keyword);
    });
  }


}
