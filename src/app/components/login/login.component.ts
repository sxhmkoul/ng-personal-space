import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isLogin: boolean = false;
  backBtn: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          if(this.router.url === '/login/email'){
            this.backBtn = true;
          } else{
            this.backBtn = false;
          }
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }

      
  })

}

signIn(){
  this.isLogin = true;
  this.backBtn = true;
}

}
