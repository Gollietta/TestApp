import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { LoginService } from './login/login.service';
import { CommonConstant } from './CommonConstant';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  // get用header
  get defaultHeader(): HttpHeaders{
    const header = this.authorizationHeader;
    return header;
  }

  // post用header
  get headerForWithJson(): HttpHeaders{
    const header = this.authorizationHeader.set('Content-Type', 'application/json');
    return header;    
  }

  // トークンをつけたheader
  get authorizationHeader(): HttpHeaders{
    return new HttpHeaders({'Authorization': this.loginService.token });
  }

  // ajax通信先
  get host(): string{
    return CommonConstant.HOST ? CommonConstant.HOST: '';
  }

  // login状態でgetする場合の共通関数（ログアウト状態なら通信を行わずログイン画面に遷移）
  getLoggedIn<T>(url: string): Observable<T>{
    if(this.loginService.checkLoggedIn()){
      return this.get<T>(url);
    }
    else{
      return empty();
    }
  }

  // login状態でpostする場合の共通関数（ログアウト状態なら通信を行わずログイン画面に遷移）
  postLoggedIn<T>(url: string, body: any): Observable<T>{
    if(this.loginService.checkLoggedIn()){
      return this.post<T>(url, body);
    }
    else{
      return empty();
    }
  }

  // ajax時にレスポンスheaderからトークンを取得してlocalStorageに保存
  // ⇒ resをres.bodyに加工
  get<T>(url: string): Observable<T>{
    return this.http.get<T>(this.host + url, {
      headers: this.defaultHeader,
      observe: 'response'
    }).pipe(
      tap(res => this.loginService.storeToken(res)),
      map(res => res.body));
  }


  // ajax時にレスポンスheaderからトークンを取得してlocalStorageに保存
  // ⇒ resをres.bodyに加工
  post<T>(url: string, body: any): Observable<T>{
    return this.http.post<T>(this.host + url, body, {
      headers: this.headerForWithJson,
      observe: 'response'
    }).pipe(
      tap(res => this.loginService.storeToken(res)),
      map(res => res.body));
  }
}
