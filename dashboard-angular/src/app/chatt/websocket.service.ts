import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

export interface ChatMessage {
  sender: string;
  content: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  private stompClient: Client;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  public messages: Observable<ChatMessage[]> = this.messageSubject.asObservable();
  private connected: boolean = false;

  constructor() {
    this.stompClient = new Client({
      brokerURL: 'ws://192.168.1.100:8090/GRH/ws',
      webSocketFactory: () => new SockJS('https://192.168.1.100:8090/GRH/ws'),
      onConnect: this.onConnect,
      onStompError: this.onError,
      onWebSocketClose: this.onWebSocketClose,
    });

    this.stompClient.activate();
  }

  private onConnect = (frame: any) => {
    this.connected = true;
    this.stompClient.subscribe('/topic/public', this.onMessageReceived);
  }

  private onError = (error: any) => {
    console.error('WebSocket connection error:', error);
  }

  private onWebSocketClose = (event: CloseEvent) => {
    console.warn('WebSocket closed:', event);
    this.connected = false;
    // Optionally, you can attempt to reconnect here.
  }

  private onMessageReceived = (message: Message) => {
    const body: ChatMessage = JSON.parse(message.body);
    const currentMessages = this.messageSubject.value;
    this.messageSubject.next([...currentMessages, body]);
  }

  sendMessage(chatMessage: ChatMessage) {
    if (this.connected) {
      this.stompClient.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(chatMessage) });
    } else {
      console.error('Cannot send message: not connected');
    }
  }
}