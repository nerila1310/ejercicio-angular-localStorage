import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  formularioAgregar!: FormGroup;

  constructor(private fb: FormBuilder, public productosServicio: ProductosService) { }

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre:['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }


  agregar(){
    this.productosServicio.agregarLocalStorage(this.formularioAgregar.value);
    this.formularioAgregar.reset();
  }

}
