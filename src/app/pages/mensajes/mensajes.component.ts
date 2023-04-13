import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
    selector: 'app-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
    constructor (
        public swService: WebsocketService
    ) {}

    salir() {
        this.swService.logoutWS();
    }
}
