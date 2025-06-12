import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public router: Router) {}

  isLoginOrCadastro(): boolean {
    const rotaAtual = this.router.url;
    return rotaAtual === '/login' || rotaAtual === '/cadastro';
  }
}
