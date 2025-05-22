import { Injectable } from '@angular/core';
import { Treino } from '../models/treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  private treinos: Treino[] = [
    { id: 1, nome: 'Corrida', tipo: 'Cardio', duracao: 30 },
    { id: 2, nome: 'Musculação', tipo: 'Força', duracao: 45 },
    { id: 3, nome: 'HIIT', tipo: 'Cardio', duracao: 20 }
  ];

  constructor() { }

  getTreinos(): Treino[] {
    return this.treinos;
  }
}
