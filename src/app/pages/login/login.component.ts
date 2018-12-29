import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  nombre:string = '';

  constructor(public _webSocket:WebsocketService, public router: Router) { }

  ngOnInit() {
  }

  ingresar()
  {
    this._webSocket.loginWS(this.nombre)
      .then(() => {
        this.router.navigate(['/mensajes']); 
      });
  }

}
