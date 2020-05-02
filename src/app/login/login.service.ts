import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CommonConstant } from '../CommonConstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router:Router,
    private http: HttpClient
  ) { }

  // 失敗時の処理は今回は実装していません
  login(data: {username: string, password:string }, successUrl: string){
    // 認証情報をサーバーにpost
    this.http.post(CommonConstant.HOST + '/auth/login', data, { observe: 'response'})
    .subscribe(res => {
      this.storeToken(res); // ログイン成功時はトークンをlocalStorageに保持する
      this.router.navigate([successUrl]); // ログイン成功時のページに遷移
    });
  }

  // ログアウト処理
  // localStorageのトークンを破棄してログイン画面に遷移
  logout(){
    //localStorage.removeItem(CommonConstant.LocalStorage.JWT);
    this.redirectToLoginPage();
  }

  // ログイン状態かどうか確認し、ログイン状態でなければログイン画面に遷移する
  checkLoggedIn(): boolean {
    const isLoggedIn = this.isLoggedIn;
    if(!isLoggedIn){
      this.redirectToLoginPage();
    }
    return isLoggedIn;
  }

  // レスポンスヘッダーからトークンを取りだしてローカルストレージに保存
  storeToken<T>(res: HttpResponse<T>){
    const token = res.headers.get('Authorization');
    //localStorage.setItem(CommonConstant.LocalStorage.JWT, token);
  }

  // ログイン画面に遷移する
  private redirectToLoginPage(){
    this.router.navigate(['/login']);
  }

  // トークンがあり、有効期限が切れていなければログイン状態とみなす
  get isLoggedIn(): boolean{
    return !this.isLoggedOut;
  }

  get isLoggedOut(): boolean{
    if(!this.token){
      return true;
    }
/*    else{
      const payLoad: {sub: string, exp: number } = JSON.parse(window.atob(this.storeToken.split('.')[1]));
      return expireSec < new Date().getTime() / 1000;
    }
*/
  }

  // localStorageからトークンを取得
  get token(): string{
    //const token = localStorage.getItem(CommonConstant.LocalStorage.JWT);
    const token = "";
    return token ? token : '';
  }
}
