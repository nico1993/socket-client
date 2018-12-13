import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto:string;
  mensajesSubscription: Subscription;
  elemento: HTMLElement;
  mensajes:any[] = [];

  constructor(
    public _chat: ChatService
  ) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSubscription = this._chat.getMessages().subscribe(
      mensaje => {
        this.mensajes.push(mensaje);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        });
      }
    )
  }

  ngOnDestroy()
  {
    this.mensajesSubscription.unsubscribe();
  }

  enviar()
  {
    if(this.texto.trim().length === 0)
      return;
    this._chat.sendMessage(this.texto);
    this.texto = "";
  }
}
