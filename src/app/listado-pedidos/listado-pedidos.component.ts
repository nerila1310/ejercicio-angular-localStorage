import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {
  listadoPedidos: Pedidos[] = new Array<Pedidos>();

  constructor( public pedidoServicio: PedidosService) { }

  ngOnInit(): void {
    this.listadoPedidos = this.pedidoServicio.listadoPedidoslocalStorage;
  }

}
