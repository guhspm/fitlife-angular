import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Treino } from 'src/app/models/treino';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent implements OnInit {
  treinos: Treino[] = [];
  formTreino!: FormGroup;
  editandoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private treinoService: TreinoService
  ) {}

  ngOnInit(): void {
    this.formTreino = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      duracao: [0, [Validators.required, Validators.min(1)]]
    });

    this.carregarTreinos();
  }

  carregarTreinos(): void {
    this.treinoService.getTreinos().subscribe({
      next: (data) => (this.treinos = data),
      error: (err) => console.error('Erro ao carregar treinos', err)
    });
  }

  adicionarOuEditarTreino(): void {
    if (this.formTreino.invalid) return;

    const dados = this.formTreino.value;

    if (this.editandoId) {
      this.treinoService.updateTreino(this.editandoId, dados).subscribe(() => {
        this.carregarTreinos();
        this.cancelarEdicao();
      });
    } else {
      this.treinoService.addTreino(dados).subscribe((novo) => {
        this.treinos.push(novo);
        this.formTreino.reset();
      });
    }
  }

  editarTreino(treino: Treino): void {
    this.editandoId = treino.id;
    this.formTreino.patchValue({
      nome: treino.nome,
      tipo: treino.tipo,
      duracao: treino.duracao
    });
  }

  cancelarEdicao(): void {
    this.editandoId = null;
    this.formTreino.reset();
  }

  removerTreino(id: number): void {
    this.treinoService.deleteTreino(id).subscribe(() => {
      this.treinos = this.treinos.filter((t) => t.id !== id);
    });
  }
}
