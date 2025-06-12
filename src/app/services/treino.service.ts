import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Treino } from '../models/treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {
  private apiUrl = 'http://localhost:3000/treinos';

  constructor(private http: HttpClient) {}

  getTreinos(): Observable<Treino[]> {
    return this.http.get<Treino[]>(this.apiUrl);
  }

  addTreino(treino: Treino): Observable<Treino> {
    return this.http.post<Treino>(this.apiUrl, treino);
  }

  updateTreino(id: number, treino: Treino): Observable<Treino> {
    return this.http.put<Treino>(`${this.apiUrl}/${id}`, treino);
  }

  deleteTreino(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
