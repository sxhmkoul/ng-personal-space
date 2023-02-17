import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';


interface chatFormat {
  id: string,
  content: string,
  timestamp: Date
}

@Component({
  selector: 'app-chatspace',
  templateUrl: './chatspace.component.html',
  styleUrls: ['./chatspace.component.scss']
})


export class ChatspaceComponent implements OnInit{
  @ViewChild('chatBody') chatBody !: ElementRef;

  typing: string = '';

  constructor(public ChatService: ChatService){}

  ngOnInit(): void {
    this.ChatService.fetchChats().subscribe((resp: any)=>{
      for(let x in resp){
        this.ChatService.messages.push(resp[x]);
      }
      console.log('resp',resp);
      console.log('messages',this.ChatService.messages);
      
    })
  }

  submit(){
    let serial = Math.floor(Math.random() * 10000);
    let date = new Date;
    // let stamp = date.toLocaleTimeString;
    // this.messages.push({id: serial, content: this.typing, timestamp: date});
    this.ChatService.sendChats({id: serial, content: this.typing, timestamp: date}).subscribe(res=>{
      console.log(res);
      this.ChatService.fetchChats().subscribe((resp: any)=>{
        this.ChatService.messages = [];
        for(let x in resp){
          this.ChatService.messages.push(resp[x]);
        }
      })
    })

    this.chatBody.nativeElement.scrollTo(0,3000);
    this.typing = ''
  }

  record(){
    console.log('Feature coming soon...');
  }
}
