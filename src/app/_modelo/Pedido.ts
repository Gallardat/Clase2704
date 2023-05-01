export class Pedido{

  idPedido: number;
  idCliente: number;
  formaDePago: string;
  direccion: string;

  constructor(idPedido:number,idCliente:number, formaDePago: string, direccion: string){
    this.idPedido=idPedido
    this.idCliente=idCliente
    this.formaDePago=formaDePago
    this.direccion=direccion
  }
}
