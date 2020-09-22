import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent },
  {path: 'produto/:codigo', component: DetalhamentoComponent },
  {path: 'home', component: HomeComponent},
  {path: 'encontreLoja', component: LojaComponent},
  {path: 'sobre', component: SobreComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})

export class AppRoutingModule { }
