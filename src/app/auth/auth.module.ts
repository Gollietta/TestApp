import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
    declarations: [],
    providers: [
        AuthGuard,
        AuthService,
        JwtAuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }

    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]

})
export class AuthModule {}