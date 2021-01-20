import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();

  constructor(public ServicioCliente: ClientesService, public ServicioPedido: PedidosService, public route: Router) { }

  ngOnInit(): void {
    this.clientes = this.ServicioCliente.clientesLocalStorage;
  }

  buscarCliente(nombreBuscar){
    this.clientes = this.ServicioCliente.clientesLocalStorage.filter(x =>{
      return x.nombre.toLowerCase().includes(nombreBuscar);
    })
  }

  irAProductos(cliente: Clientes){

    this.ServicioPedido.pedido.clienteID = cliente.clienteID;
    this.ServicioPedido.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`;  
    this.route.navigateByUrl('/productos')
  } 

}