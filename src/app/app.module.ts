import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowDropdownComponent } from './components/arrow-dropdown/arrow-dropdown.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatspaceComponent } from './components/chatspace/chatspace.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { OauthComponent } from './components/oauth/oauth.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowDropdownComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ChatspaceComponent,
    SignupFormComponent,
    LoginFormComponent,
    OauthComponent,
    BackButtonComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
