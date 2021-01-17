import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: String;
  apellido: String;
  edad: number;
}

interface Productos{
  nombre: String;
  precio: number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();
  productos: Array<Productos> = new Array<Productos>();

  constructor() { }

  ngOnInit(): void {
  
      // this.clientes.push(
      //   { nombre: 'Diana', apellido: 'Pérez', edad: 22 },
      //   {nombre: 'Diana', apellido: 'Alvarado', edad: 20}
      // )

      // this.productos.push(
      //   { nombre: 'Sabritas',  precio: 22 },
      //   {nombre: 'Coca Cola',  precio: 20}
      // )
  }

  guardarCliente(){
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
  }

  guardarProducto(){
    localStorage.setItem('productos', JSON.stringify(this.productos))
  }

  leer(){
    
    this.productos = JSON.parse(localStorage.getItem('productos')) 
    this.clientes = JSON.parse(localStorage.getItem('clientes'))
  }

  eliminarClientes(){
    localStorage.removeItem('clientes');
  }

  eliminarProductos(){
    localStorage.removeItem('productos');
  }

  eliminarTodo(){
    localStorage.clear();
  }

}
