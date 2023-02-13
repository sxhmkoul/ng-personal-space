import { Component, OnChanges, OnInit } from '@angular/core';
import { IntraDataService } from 'src/app/services/intra-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit{
email: string = '';
password: string = '';
errorMsg: string = '';

constructor(private intra: IntraDataService, private auth: AuthService, private activeRoute: ActivatedRoute, private router: Router){}

ngOnInit(): void {
  this.intra.isSubPage = true;
}


  signUpCta(){
    this.auth.signup(this.email, this.password).subscribe(
      res=>{
      console.log(res); 
      this.router.navigate(['space']);
    },
    error=>{
      console.log(error);
      switch(error.error.error.message){
        case 'EMAIL_EXISTS': {
          this.errorMsg = "Email already exists."
          break;
        };
        case 'TOO_MANY_ATTEMPTS_TRY_LATER': {
          this.errorMsg = "Too many attempts, try again later."
          break;
        }
      }
      // this.errorMsg = error.error.error.message;
      // alert(error.error.error.message);
    }
    )
  }
}
