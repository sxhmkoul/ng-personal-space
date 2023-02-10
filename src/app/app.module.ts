import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowDropdownComponent } from './components/arrow-dropdown/arrow-dropdown.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatspaceComponent } from './components/chatspace/chatspace.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowDropdownComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ChatspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
