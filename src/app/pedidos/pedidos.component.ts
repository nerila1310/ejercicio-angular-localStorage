import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(public ServicioPedido: PedidosService) { }

  ngOnInit(): void {
    let pedido: Pedidos = new Pedidos();
    pedido.pedidoID = 1
    pedido.clienteID = 1;
    pedido.nombreCliente = 'Neri Laredo';
    pedido.totalPedido = 1500;
    pedido.detallePedido.push(
      { productoID: 1, nombre: 'CocaCola', cantidad: 5, precio: 15, total: 75},
      { productoID: 2, nombre: 'Sabritas', cantidad: 3, precio: 13, total: 39},
    )
    console.log(pedido)

  }

}
