import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RefeicaoService } from 'src/app/services/refeicao.service';
import { Refeicao } from 'src/app/models/refeicao';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.component.html'
})
export class RefeicoesComponent implements OnInit {
  refeicoes: Refeicao[] = [];
  formRefeicao!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private refeicaoService: RefeicaoService
  ) {}

  ngOnInit(): void {
    this.formRefeicao = this.fb.group({
      nome: [''],
      descricao: ['']
    });

    this.buscarRefeicoes();
  }

  buscarRefeicoes(): void {
    this.refeicaoService.getRefeicoes().subscribe(refs => {
      this.refeicoes = refs;
    });
  }

  adicionarRefeicao(): void {
    const novaRef = this.formRefeicao.value;
    this.refeicaoService.addRefeicao(novaRef).subscribe(() => {
      this.formRefeicao.reset();
      this.buscarRefeicoes();
    });
  }

  removerRefeicao(id: number): void {
    this.refeicaoService.deleteRefeicao(id).subscribe(() => {
      this.buscarRefeicoes();
    });
  }
}
