import { detallePedido } from "./detallePedido";
import { Productos } from "./productos";

export class Pedidos{
    pedidoID: number;
    clienteID: number;
    nombreCliente: string;
    totalPedido: number;
    detallePedido: Array<detallePedido>;

    constructor(datos?: Pedidos){

        if(datos != null){
            this.pedidoID = datos.pedidoID;
            this.clienteID = datos.clienteID;
            this.nombreCliente = datos.nombreCliente;
            this.totalPedido = datos.totalPedido;
            this.detallePedido = datos.detallePedido;
            return; 
        }

        this.pedidoID = this.pedidoID;
        this.clienteID = this.clienteID;
        this.nombreCliente = this.nombreCliente;
        this.totalPedido = this.totalPedido;
        this.detallePedido = new Array<detallePedido>();
    }

    agregarProducto(producto: Productos){
        let pedidoDetalle: detallePedido = new detallePedido();
        pedidoDetalle.cantidad = 1;
        pedidoDetalle.nombre = producto.nombre;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.productoID = producto.productoID;
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio; 

        let existe: number = this.detallePedido.filter(x=>x.productoID == producto.productoID).length
        if(existe > 0 ){
            let posicion: number = this.detallePedido.findIndex(x=>x.productoID == producto.productoID);
            this.detallePedido[posicion].cantidad ++;
            this.detallePedido[posicion].total = this.detallePedido[posicion].cantidad * this.detallePedido[posicion].precio; 
        }else {
            this.detallePedido.push(pedidoDetalle)
        }
        this.actualizarTotal();
        
    }

    private actualizarTotal(){
        this.totalPedido = 0;
        for(let producto of this.detallePedido){
            this.totalPedido = this.totalPedido + producto.total;
        }
    }
}