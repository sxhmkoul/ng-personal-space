import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntraDataService implements OnInit{
  pageType: string = '';
  subPageType: string = '';
  isSubPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
      
  }
}
