import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Produto } from './model/produto';
import { Estoque } from './model/estoque';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { LojaComponent } from './loja/loja.component';
import { SobreComponent } from './sobre/sobre.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    DetalhamentoComponent,
    LojaComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfJz_THeOk45gpfy7oxESJyS8Be7P54H4' //API do Google Maps
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
