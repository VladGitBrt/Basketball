import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  userCounter: number = 0;
  User: User[] = [];
  @Output() isLogged = new EventEmitter<boolean>();
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit(): void {
    console.log('Login component works');
  }
  loginWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['/home']));
  }
}
