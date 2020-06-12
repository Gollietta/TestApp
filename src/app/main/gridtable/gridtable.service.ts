import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { GridtableInterface } from './gridtable.interface';
import { config } from '../../config';

const url = config.apiUrl+'/product';
//const url = 'http://localhost:3000/product';

@Injectable({
  providedIn: 'root'
})
export class GridtableService {

  constructor(private http: HttpClient) { }

  public searchProducts(keyword: string): Observable<GridtableInterface[]>{
    return this.http.get<GridtableInterface[]>(url+"/search?keyword="+keyword, {})
    .pipe(
      catchError(this.handleError)
    );
  }

  public getProduct(product_id: string): Observable<GridtableInterface>{
    console.log(url);
    return this.http.get<GridtableInterface>(url, {})
    .pipe(
      catchError(this.handleError)
    );
  }

  public addProduct(new_product: GridtableInterface): Observable<GridtableInterface>{
    return this.http.post<GridtableInterface>(url+'/post', new_product)
    .pipe(
      catchError(this.handleError)
    )
  }

  public editProduct(_id: string, product: GridtableInterface): Observable<GridtableInterface>{
    return this.http.put<GridtableInterface>(url+'/edit?_id='+_id, product)
    .pipe(
      catchError(this.handleError)
    )
  }

  public deleteProduct(_id: string): Observable<GridtableInterface>{
    return this.http.delete<GridtableInterface>(url+'/delete?_id='+_id)
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