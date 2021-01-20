import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Array<Productos> = new Array<Productos>();

  constructor(public productosServicio: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage
  }
 
  buscarProducto(productoBuscar){
    this.productos = this.productosServicio.productosLocalStorage.filter(x =>{
      return x.nombre.toLowerCase().includes(productoBuscar);
    })
  }


}
