import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estoque } from '../model/estoque';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent implements OnInit {
  produtoAtual: Produto; //Produto cujo código será passado por parâmetro via rota
  estoque1 = new Estoque();

  constructor(private route: ActivatedRoute) { }

  //Configuração para passagem de parâmetro por rotas
  ngOnInit() {
    this.route.params.subscribe( (objeto: Produto) => {
      this.produtoAtual = this.estoque1.buscaPorCod(objeto.codigo); //Retorna o objeto que tem o código passado por parâmetro
    });  
  }

}
