import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status_message : string = "";
  isDisabled: boolean;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls }

  validate(){

  }

  login(){
    this.isDisabled = true;
    this.status_message = "LOADING, PLEASE WAIT...";
    this.authService.login(
      {
        username: this.f.username.value,
        password: this.f.password.value
      }
    )
    .subscribe(status_code => {
      console.log("Response code is "+status_code);//TEST
      if(status_code===201) {
        this.isDisabled = false;
        this.router.navigate(['/main']);
      }
      else{
        console.log("Login failed.");//TEST
        this.isDisabled = false;
        this.status_message = `Login failed.(${status_code})`;
      }
    });
  }

}
