import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    public _webSocket: WebsocketService,
    public _chat: ChatService
  ){}

  ngOnInit()
  {
    this._chat.getPrivateMessages().subscribe(mensaje => {
      console.log(mensaje);
    });
  }
}
