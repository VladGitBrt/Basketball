import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CourtPageComponent } from './court-page/court-page.component';
import { CourtsComponent } from './courts/courts.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: 'courts',
        component: CourtsComponent,
        children: [{ path: 'courtpage/:id', component: CourtPageComponent }],
      },
      { path: 'account', component: AccountComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
