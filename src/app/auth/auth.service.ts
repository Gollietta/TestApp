import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { config } from '../config';
import { Tokens } from './tokens';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFLESH_TOKEN';
    private loggedUser: string;

    constructor(private http: HttpClient){}

    login(user: { username: string, password: string}): Observable<number>{
        return this.http.post<any>(`${config.apiUrl}/login`, user, { observe: 'response' })
        .pipe(
//            tap((res: HttpResponse<any>) => this.doLoginUser(user.username, tokens)),
            map((res: HttpResponse<any>) => this.doLoginUser(res.status, user.username, res.body)),
            //mapTo(true),
            catchError((error: HttpErrorResponse) => {
                //alert(error.error);
                console.log(error); //TEST
                return of(error.status);
            })
        )
    }

    logout(): Observable<boolean>{
        return this.http.post<any>(`${config.apiUrl}/logout`, {'refreshToken': this.getRefreshToken()})
        .pipe(
            tap( () => this.doLogoutUser() ),
            mapTo(true),
            catchError(error => {
                alert(error.error);
                return of(false);
            })
        )
    }

    isLoggedIn(){
        return !!this.getJwtToken();
    }

    refreshToken() {
        return this.http.post<any>(`${config.apiUrl}/refresh`, {'refreshToken': this.getRefreshToken()})
        .pipe(
            tap( (tokens: Tokens) => {
                console.log("Need token???"); //TEST
                console.log(tokens); //TEST
                this.storeJwtToken(tokens.jwt);
            })
        )
    }

    getJwtToken(){
        return localStorage.getItem(this.JWT_TOKEN);
    }

    private doLoginUser(code: number, username: string, tokens: Tokens): number {
        console.log("doLoginUser is called.");//TEST
        console.log("Status code was "+code);//TEST
        console.log(tokens);//TEST
        this.loggedUser = username;
        this.storeTokens(tokens);
        return code;
    }

    private doLogoutUser() {
        this.loggedUser = null;
        this.removeTokens();    
    }

    private getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }

    private storeJwtToken(jwt: string){
        localStorage.setItem(this.JWT_TOKEN, jwt)
    }

    private storeTokens(tokens: Tokens) {
        //localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
        localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
        localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    }

    private removeTokens() {
        localStorage.removeItem(this.JWT_TOKEN);
        localStorage.removeItem(this.REFRESH_TOKEN);
    }

}