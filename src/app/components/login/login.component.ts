import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin: boolean = false;
  backBtn: boolean = false;

  signIn(){
    this.isLogin = true;
    this.backBtn = true;
  }
}
