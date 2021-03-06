import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { config } from '../config';

// Taken from "https://www.youtube.com/watch?v=F1GUjHPpCLA" by Angular Academy

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    private isRefreshing: boolean = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(public authService: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(this.authService.getJwtToken() ){
            request = this.addToken(request, this.authService.getJwtToken() );
        }

        return next.handle(request).pipe(catchError(error => {
            if(error instanceof HttpErrorResponse && error.status === 401 && error.url !== `${config.apiUrl}/login`){
                return this.handle401Error(request, next);
            }
            else{
                return throwError(error);
            }
        }));
    }

    private addToken(request: HttpRequest<any>, token: string){
        return request.clone({
            setHeaders: {'Authorization': `Bearer ${token}`}
        });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler){
        console.log("handle401Error is called.");//TEST
        if(!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap( (token: any) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(token.jwt);
                    return next.handle(this.addToken(request, token.jwt) )
                })
            );

        }
        else {
            return this.refreshTokenSubject.pipe(
                filter(token => token != null),
                take(1),
                switchMap(jwt => {
                    return next.handle(this.addToken(request, jwt) )
                })
            );
        }
    }

}