import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.email && this.senha) {
      // Simulação de login
      this.router.navigate(['/dashboard']);
    } else {
      alert('Preencha todos os campos');
    }
  }
}
