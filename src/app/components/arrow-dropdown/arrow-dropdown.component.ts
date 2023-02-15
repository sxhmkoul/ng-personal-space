import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-arrow-dropdown',
  templateUrl: './arrow-dropdown.component.html',
  styleUrls: ['./arrow-dropdown.component.scss']
})
export class ArrowDropdownComponent {
  @Input('target') chatBody :any
  dropdownClicked: boolean = false;
  @ViewChild('dropdown') subMenu !: ElementRef;
  // @HostListener('window:click', ['$event']) detectClick(event: Event){
  //   console.log(event);
  //   // if(this.subMenu.nativeElement.contains(event.target)){
  //   //   this.dropdownClicked = true;
  //   // } else this.dropdownClicked = false;
  // }
  constructor(private renderer : Renderer2, private ChatService: ChatService){}
  dropdownCta(){
    this.dropdownClicked = true;
    console.log(this.chatBody);
    this.renderer.listen(this.chatBody, 'click',  (event: Event) =>{
      this.dropdownClicked = false;
    })
  }

  deleteChats(){
      this.ChatService.deleteChats().subscribe((res)=>{
          console.log(res);
      })
  }

}
