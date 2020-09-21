import { Component, OnInit } from '@angular/core';
import { Estoque } from '../model/estoque';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  estoque1 = new Estoque();

  public productsPerPage = 8;
  public selectedPage = 1;

  constructor() { }

  ngOnInit() {
  }

  //Funções para paginação
  get produtos(): Produto[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.estoque1.produtos
      .slice(pageIndex, pageIndex + this.productsPerPage)
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(20 / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

}
