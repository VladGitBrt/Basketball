import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../app.component';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(
    public socialAuthService: SocialAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((data) => {});
  }
}
