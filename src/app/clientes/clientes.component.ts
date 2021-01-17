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

  constructor() { }

  ngOnInit() {}

  guardarCliente(){
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();

    clientesAgregar.push(
      {nombre: 'Diana', apellido: 'Pérez', edad: 22},
      {nombre: 'Diana', apellido: 'Vazquez', edad: 20}
    )

    localStorage.setItem('clientes', JSON.stringify(clientesAgregar))
  }

  guardarProducto(){

    let productosAgregar: Array<Productos> = new Array<Productos>();

    productosAgregar.push(
      {nombre: 'CocaCola', precio: 14},
      {nombre: 'Papas Crema/Cebolla', precio: 34}
    )

    localStorage.setItem('productos', JSON.stringify(productosAgregar))
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

  get clientesLocales(): Clientes[]{
    let clienteLocalStorage: Clientes[] = JSON.parse(localStorage.getItem('clientes'))
    if(clienteLocalStorage == null){
      return Array<Clientes>();
    }
    return clienteLocalStorage
  }

  get productosLocales(): Productos[]{
    let productoLocalStorage: Productos[] = JSON.parse(localStorage.getItem('productos'))
    if(productoLocalStorage == null){
      return Array<Productos>();
    }
    return productoLocalStorage
  }

}
