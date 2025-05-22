import { Component, OnInit } from '@angular/core';
import { Refeicao } from 'src/app/models/refeicao';
import { RefeicaoService } from 'src/app/services/refeicao.service';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.css']
})
export class RefeicoesComponent implements OnInit {

  refeicoes: Refeicao[] = [];

  novaRefeicao: Refeicao = {
    id: 0,
    nome: '',
    horario: '',
    calorias: 0
  };

  constructor(private refeicaoService: RefeicaoService) { }

  ngOnInit(): void {
    this.refeicoes = this.refeicaoService.getRefeicoes();
  }

  adicionarRefeicao(): void {
    const novoId = this.refeicoes.length > 0 ? Math.max(...this.refeicoes.map(r => r.id)) + 1 : 1;
    const nova = { ...this.novaRefeicao, id: novoId };
    this.refeicoes.push(nova);
    this.novaRefeicao = { id: 0, nome: '', horario: '', calorias: 0 };
  }

  removerRefeicao(id: number): void {
    this.refeicoes = this.refeicoes.filter(r => r.id !== id);
  }
}
