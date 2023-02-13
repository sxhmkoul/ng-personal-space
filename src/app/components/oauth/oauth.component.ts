import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { IntraDataService } from 'src/app/services/intra-data.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent {
  isLogin: boolean = false;
  backBtn: boolean = false;
  formPath: string = '';
  redirPath: string = '';

  constructor(private router: Router, public intra: IntraDataService){}

  ngOnInit(): void {

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          // if(this.router.url.includes('login')){
          //   this.formPath = 'login';
          //   this.redirPath = 'signup';
          // } else{
          //   this.formPath = 'signup';
          //   this.redirPath = 'login';
          // }

          
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          // console.log(event.error);
      }

      
  })

}

  signIn(){
    this.isLogin = true;
    this.backBtn = true;
  }
}
