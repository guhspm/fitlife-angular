import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  cadastrar() {
    if (this.nome && this.email && this.senha) {
      // Simula cadastro
      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);
    } else {
      alert('Preencha todos os campos');
    }
  }
}
