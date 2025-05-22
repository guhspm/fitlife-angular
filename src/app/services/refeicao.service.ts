import { Injectable } from '@angular/core';
import { Refeicao } from '../models/refeicao';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {

  private refeicoes: Refeicao[] = [
    { id: 1, nome: 'Ovos e pão integral', horario: 'Café da manhã', calorias: 350 },
    { id: 2, nome: 'Frango e arroz integral', horario: 'Almoço', calorias: 550 },
    { id: 3, nome: 'Iogurte e frutas', horario: 'Lanche da tarde', calorias: 250 }
  ];

  constructor() { }

  getRefeicoes(): Refeicao[] {
    return this.refeicoes;
  }
}
