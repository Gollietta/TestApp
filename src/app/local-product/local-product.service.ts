import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ProductInterface } from './product.interface';

const url = 'http://localhost:3000/product';

@Injectable({
  providedIn: 'root'
})
export class LocalProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>(url, {})
    .pipe(
      catchError(this.handleError)
    );
  }

  public getProduct(in_productid: string): Observable<ProductInterface>{
    console.log(url);
    return this.http.get<ProductInterface>(url, {})
    .pipe(
      catchError(this.handleError)
    );
  }

  public postProduct(new_product: ProductInterface): Observable<ProductInterface>{
    return this.http.post<ProductInterface>(url+'/post', new_product)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured:', error.error.message);
    }
    else{
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);

    }
    return throwError(console.log('handleError is called.'));
  }


}

//tap( response => { if(response.code != 200) throw new Error(response.message) } ),
//        catchError( error => {throw new Error(error.message)} )