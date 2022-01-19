import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

/*Arrey de rotas */
const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch:'full' }, /*esse path vazio (endereço do servidor) direciona para o path entrar, e o path : 'full' para todas as rotas */

  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
