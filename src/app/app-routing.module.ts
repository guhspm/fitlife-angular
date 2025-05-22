import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TreinosComponent } from './pages/treinos/treinos.component';
import { RefeicoesComponent } from './pages/refeicoes/refeicoes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'treinos', component: TreinosComponent },
  { path: 'refeicoes', component: RefeicoesComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro', component: CadastroComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

