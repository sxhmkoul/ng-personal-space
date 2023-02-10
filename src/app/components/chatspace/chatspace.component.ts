import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chatspace',
  templateUrl: './chatspace.component.html',
  styleUrls: ['./chatspace.component.scss']
})
export class ChatspaceComponent {
  @ViewChild('chatBody') chatBody !: ElementRef;
  messages: {id: number, content: string, timestamp: Date}[] = [];
  typing: string = '';

  constructor(){}
  submit(){
    let serial = Math.floor(Math.random() * 10000);
    let date = new Date;
    // let stamp = date.toLocaleTimeString;
    this.messages.push({id: serial, content: this.typing, timestamp: date});
    this.chatBody.nativeElement.scrollTo(0,3000);
    this.typing = ''
  }

  record(){
    console.log('Feature coming soon');
  }
}
