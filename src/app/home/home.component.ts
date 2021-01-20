import { Component, OnInit } from '@angular/core';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();

  constructor(public ServicioCliente: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.ServicioCliente.clientesLocalStorage;
  }

  buscarCliente(nombreBuscar){
    this.clientes = this.ServicioCliente.clientesLocalStorage.filter(x =>{
      return x.nombre.toLowerCase().includes(nombreBuscar);
    })
  }

}