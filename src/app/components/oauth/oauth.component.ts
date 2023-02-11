import { Component } from '@angular/core';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent {
  isLogin: boolean = false;
  backBtn: boolean = false;

  signIn(){
    this.isLogin = true;
    this.backBtn = true;
  }
}
