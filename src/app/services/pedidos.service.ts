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

  guardarPedido(){
    let listadoPedidos: Pedidos[] = new Array<Pedidos>();
    listadoPedidos = this.listadoPedidoslocalStorage;
    listadoPedidos.push(this.pedido);
    localStorage.setItem('pedidos', JSON.stringify(listadoPedidos))
    localStorage.removeItem('ultimoPedido')
    this.pedido = new Pedidos(null);
  }

  get listadoPedidoslocalStorage(): Pedidos[]{
    let pedidos: Pedidos[] = JSON.parse(localStorage.getItem('pedidos'));
    if(pedidos == null){
      return new Array<Pedidos>();
    }
    return pedidos;
  }
}
