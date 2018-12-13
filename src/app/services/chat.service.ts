import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public _webSocket: WebsocketService
  ) { }

  sendMessage(mensaje:string)
  {
    const data = {
      de: 'Nicolás',
      mensaje
    };

    this._webSocket.emit('mensaje', data);
  }

  getMessages()
  {
    return this._webSocket.listen('mensaje-nuevo');
  }
}
