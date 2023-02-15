import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ChatService {
  messages: {id: number, content: string, timestamp: Date}[] = [];
  constructor(private http: HttpClient) { }

  fetchChats = () => {
      return this.http.get('https://ng-stage-1c99a-default-rtdb.firebaseio.com/chats.json')
  }

  sendChats = (data: {}) => {
    return this.http.post('https://ng-stage-1c99a-default-rtdb.firebaseio.com/chats.json',
    data
    )
  }

  deleteChats = () => {
    return this.http.delete('https://ng-stage-1c99a-default-rtdb.firebaseio.com/chats.json')
  }
}
