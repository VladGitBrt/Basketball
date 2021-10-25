import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { CourtsComponent } from './courts/courts.component';
import { CourtPageComponent } from './court-page/court-page.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CourtsComponent,
    CourtPageComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1041955512442-44mn46246604svmdbuni1c9q6dp6kgr1.apps.googleusercontent.com'
            ),
          },
        ],
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
