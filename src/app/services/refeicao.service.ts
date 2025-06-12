import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Refeicao } from '../models/refeicao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {
  private apiUrl = 'http://localhost:3000/refeicoes';

  constructor(private http: HttpClient) {}

  getRefeicoes(): Observable<Refeicao[]> {
    return this.http.get<Refeicao[]>(this.apiUrl);
  }

  addRefeicao(refeicao: Refeicao): Observable<Refeicao> {
    return this.http.post<Refeicao>(this.apiUrl, refeicao);
  }

  updateRefeicao(id: number, refeicao: Refeicao): Observable<Refeicao> {
    return this.http.put<Refeicao>(`${this.apiUrl}/${id}`, refeicao);
  }

  deleteRefeicao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
