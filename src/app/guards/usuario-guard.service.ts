import { Injectable } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UsuarioGuard {

    constructor(
        public swService: WebsocketService,
        private router: Router
    ) { }

    canActivate() {
        if (this.swService.getUsuario()) {
            return true;
        } else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}
