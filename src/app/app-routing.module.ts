import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { OauthComponent } from './components/oauth/oauth.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, children:[
    {path: 'oauth', component: OauthComponent},
    {path: 'email', component: LoginFormComponent}
  ]},
  {path: 'signup', component: SignupComponent, children:[
    {path: 'oauth', component: OauthComponent},
    {path: 'email', component: SignupFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
