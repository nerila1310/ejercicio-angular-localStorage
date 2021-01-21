import { Injectable } from '@angular/core';
import { detallePedido } from '../models/detallePedido';
import { Pedidos } from '../models/pedidos';
import { Productos } from '../models/productos';
import { PedidosComponent } from '../pedidos/pedidos.component';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
  pedido:  Pedidos = new Pedidos();
  
  constructor() { 
    this.pedido = this.ultimoPedido;
  }

  guardarLocalStorage(){
    localStorage.setItem('ultimoPedido', JSON.stringify(this.pedido))
  }

  get ultimoPedido(): Pedidos{
    let pedidoLocalStorage: Pedidos = new Pedidos( JSON.parse(localStorage.getItem('ultimoPedido')))
    if(pedidoLocalStorage == null){
      return new Pedidos();
    }
    return pedidoLocalStorage;
  }
}
