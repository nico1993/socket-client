import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/Usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario:Usuario;

  constructor(
    private socket:Socket
  ) 
  { 
    this.checkStatus();
  }

  checkStatus()
  {
    this.socket.on('connect', () => {
      console.log("Conectado al servidor");
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log("Desconectado del servidor");
      this.socketStatus = false;
    });
  }

  emit(eventName:string, data?:any, callback?:Function)
  {
    this.socket.emit(eventName, data, callback);
  }

  listen(event:string)
  {
    return this.socket.fromEvent(event);
  }

  loginWS(nombre:string){
    this.emit('login-usuario', {nombre}, (response) => {
      console.log(response);
    });
  }
}
