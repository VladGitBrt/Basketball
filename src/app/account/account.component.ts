import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  avatarURL!: string;
  name!: string;
  email!: string;
  accountLinkType!: string;
  constructor(public socialAuthService: SocialAuthService) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((data) => {
      console.log(data);
      this.avatarURL = data.photoUrl;
      this.name = data.name;
      this.email = data.email;
      this.accountLinkType = data.provider;
    });
  }
}
