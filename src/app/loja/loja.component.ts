import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  
  //Configurações da localização simulada mostrada na API do Google Maps
  lat: number = -23.561186;
  lng: number = -46.521983;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
