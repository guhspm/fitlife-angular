import { Component, OnInit } from '@angular/core';
import { Treino } from 'src/app/models/treino';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent implements OnInit {

  treinos: Treino[] = [];

  novoTreino: Treino = {
    id: 0,
    nome: '',
    tipo: '',
    duracao: 0
  };

  constructor(private treinoService: TreinoService) { }

  ngOnInit(): void {
    this.treinos = this.treinoService.getTreinos();
  }

  adicionarTreino(): void {
    const novoId = this.treinos.length > 0 ? Math.max(...this.treinos.map(t => t.id)) + 1 : 1;
    const treinoAdicionado: Treino = { ...this.novoTreino, id: novoId };
    this.treinos.push(treinoAdicionado);
    this.novoTreino = { id: 0, nome: '', tipo: '', duracao: 0 };
  }

  removerTreino(id: number): void {
    this.treinos = this.treinos.filter(t => t.id !== id);
  }
}
