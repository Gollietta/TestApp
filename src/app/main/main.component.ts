import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
    });

  }

  refresh(){
    this.authService.refreshToken()
    .subscribe(res => {
      console.log("Refresh is called.");
      console.log(res);
    });
  }
}
