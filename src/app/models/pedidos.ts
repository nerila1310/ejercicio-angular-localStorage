import { detallePedido } from "./detallePedido";

export class Pedidos{
    pedidoID: number;
    clienteID: number;
    nombreCliente: string;
    totalPedido: number;
    detallePedido: Array<detallePedido>;

    constructor(){
        this.pedidoID = this.pedidoID;
        this.clienteID = this.clienteID;
        this.nombreCliente = this.nombreCliente;
        this.totalPedido = this.totalPedido;
        this.detallePedido = new Array<detallePedido>();
    }
}