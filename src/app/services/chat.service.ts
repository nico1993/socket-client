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
      de: this._webSocket.getUsuario().nombre,
      mensaje
    };

    this._webSocket.emit('mensaje', data);
  }

  getMessages()
  {
    return this._webSocket.listen('mensaje-nuevo');
  }

  getPrivateMessages()
  {
    return this._webSocket.listen('mensaje-privado-nuevo');
  }

  getUsuariosActivos()
  {
    return this._webSocket.listen('usuarios-activos');
  }

  getUsuarios()
  {
    return this._webSocket.emit('obtener-usuarios');
  }
}
