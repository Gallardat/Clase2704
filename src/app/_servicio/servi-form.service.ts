import { Injectable } from '@angular/core';
import { Detalle } from '../_modelo/Detalle';
import { Pedido } from '../_modelo/Pedido';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiFormService {

  contadorPedido: number=1
  contadorProducto: number=1

  // pedidoObser: Observable<Pedido[]>
  // detalleObser: Observable<Detalle[]>
  arrayCarrito: Detalle[]=[]
  pedidos: Pedido[]=[]
  detalles: Detalle[]=[]
  constructor() { }

  agregarcarritoser(carrito: Detalle)
  {
    this.arrayCarrito.push(carrito)
    alert("agrego al carrito")
  }
  agregarPedido(pedido: Pedido){
    this.pedidos.push(pedido)
  }

  finalizarCompra()
  {
   for(let x=0;x<this.arrayCarrito.length; x++)
   {
      this.detalles.push(this.arrayCarrito[x])
   }
   this.arrayCarrito.splice(0,this.arrayCarrito.length)
  }

  listaPedidos()
  {
    return this.pedidos
  }

  listaDetalles()
  {
    return this.detalles
  }

  encontrarId(id:number){
    return this.pedidos.find((p)=>p.idPedido==id)
  }
  encontrarCurso(id:number){
    return this.pedidos.find((ped)=>ped.idPedido==id)
  }
}
