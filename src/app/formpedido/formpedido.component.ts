import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Detalle } from '../_modelo/Detalle';
import { Pedido } from '../_modelo/Pedido';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiFormService } from '../_servicio/servi-form.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-formpedido',
  templateUrl: './formpedido.component.html',
  styleUrls: ['./formpedido.component.css']
})
export class FormpedidoComponent {
arrayDetalle: Detalle[]=[]
formulario: FormGroup
miarrayPedido: Pedido[]=[]
pedidos = new Pedido(0,0,"","")
desactivado: any

constructor(private route: Router,private activarRuta: ActivatedRoute, public miServicio: ServiFormService )
{

}

  ngOnInit(): void {
   this.formulario=new FormGroup({
      idPedido: new FormControl(),
      idCliente: new FormControl(),
      formaDePago: new FormControl(),
      direccion: new FormControl()
    })

  }
//  llamamos al metodo agregar pedido en servicio, y le pasamso una instancia del pedido que generemos generar
  finalizarPedido(){
    this.miServicio.agregarPedido( new Pedido(this.miServicio.contadorPedido++,this.formulario.value['idCliente'],this.formulario.value['formaDePago'],this.formulario.value['direccion']))
    this.miServicio.finalizarCompra()
    this.route.navigate([""])

    }
// validamos si se han rellenado todos los campos apra que aprezca el boton de  agregar detalle
    formCompleto():boolean{
      return this.formulario.value.idCliente && this.formulario.value.formaDePago && this.formulario.value.direccion
    }

    // lo mismo que el caso anterior, pero verificamos que si el carrito está
    // vacio no aparece el boton de finalizar pedido por lo que tenemos que agregar algo
    // con un operador ternario lo validamos
    detalleVacio():boolean{

      return this.miServicio.arrayCarrito.length>0? true: false
    }
}
