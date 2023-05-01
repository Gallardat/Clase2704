export class Detalle{

  idPedido: number;
  idProducto: number;
  cantidad: number;
  static contador: number;

  constructor(idPedido: number, idProducto:number, cantidad: number){
    this.idPedido=idPedido
    this.idProducto=idProducto
    this.cantidad=cantidad

  }
}
