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
  }

  calcularTotal(posicion: number){
    this.ServicioPedido.pedido.actualizarCantidades(posicion);
    this.ServicioPedido.guardarLocalStorage();
  }

  guardar(){
    this.ServicioPedido.guardarPedido(); 
  }

  eliminar(posicion: number){
    this.ServicioPedido.pedido.detallePedido.splice(posicion, 1);
    this.ServicioPedido.guardarLocalStorage();
  }

}
