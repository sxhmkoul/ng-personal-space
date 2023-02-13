import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { IntraDataService } from 'src/app/services/intra-data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnChanges{
isSignup: boolean = true;

  constructor(public intra: IntraDataService){}

  ngOnInit(): void {
      this.intra.pageType = 'signup';
      this.intra.isSubPage = false;
  }

  ngOnChanges(): void {
      this.intra.isSubPage = false;
  }

  signUp(){
    this.isSignup = false;
  }
}
