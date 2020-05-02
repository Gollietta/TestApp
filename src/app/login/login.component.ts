import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjaxService } from '../ajax.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    'loginId': ['', Validators.required],
    'password': ['', [Validators.required]],
  })

  ngOnInit(): void {
  }

  submit(){
    this.loginService.login(this.loginForm.value, '/main');
  }

}
