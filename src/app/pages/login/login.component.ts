import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar(): void {
    const email = this.formLogin.value.email;
    const senha = this.formLogin.value.senha;

    
    if (email === 'teste@fitlife.com' && senha === '123456') {
     
      this.router.navigate(['/painel']);
    } else {
      alert('E-mail ou senha inválidos.');
    }
  }
}
