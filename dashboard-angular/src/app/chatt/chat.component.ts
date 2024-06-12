import { Component, OnInit } from '@angular/core';
import { WebSocketService, ChatMessage } from './websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  messageContent: string = '';
//   userName: string = 'User' + Math.floor(Math.random() * 1000);
userName : any = localStorage.getItem('username') ;


  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.messages.subscribe((messages: ChatMessage[]) => {
      this.messages = messages;
    });
    this.sendJoinMessage();
    console.log('typeeeee',typeof(this.userName));
  }

  sendJoinMessage(): void {
    const joinMessage: ChatMessage = {
      sender: this.userName,
      content: `${this.userName} has joined the chat.`,
      type: 'JOIN'
    };
    this.webSocketService.sendMessage(joinMessage);
  }

  sendMessage(): void {
    if (this.messageContent.trim()) {
      const chatMessage: ChatMessage = {
        sender: this.userName,
        content: this.messageContent,
        type: 'CHAT'
      };
      this.webSocketService.sendMessage(chatMessage);
      this.messageContent = '';
    }
  }
}