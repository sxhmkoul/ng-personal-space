import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IntraDataService } from 'src/app/services/intra-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private intra: IntraDataService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.intra.isSubPage = true;
  }

  login = () =>{
    this.authService.login(this.email,this.password).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['space']);
      },
      error=>{
        console.log(error.error.error.message);
        switch(error.error.error.message){
          case 'EMAIL_NOT_FOUND': {
            this.errorMsg = "Email not recognized, please try a different one."
            break;
          };
          case 'INVALID_PASSWORD': {
            this.errorMsg = "Invalid password, please try again."
            break;
          }
        }

      }
    )
  }
}
