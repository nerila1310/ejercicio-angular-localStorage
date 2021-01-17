import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: String;
  apellido: String;
  edad: number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();

  constructor() { }

  ngOnInit(): void {
  
      // this.clientes.push(
      //   { nombre: 'Diana', apellido: 'Pérez', edad: 22 },
      //   {nombre: 'Diana', apellido: 'Alvarado', edad: 20}
      // )
  }

  guardarCliente(){
    localStorage.setItem("clientes", JSON.stringify(this.clientes))
  }

  leerClientes(){
   this.clientes= JSON.parse(localStorage.getItem("clientes")) 
  }

}
