import { Component, Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiFormService } from '../_servicio/servi-form.service';
import { Detalle } from '../_modelo/Detalle';
import { Pedido } from '../_modelo/Pedido';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-formdetalle',
  templateUrl: './formdetalle.component.html',
  styleUrls: ['./formdetalle.component.css']
})
export class FormdetalleComponent {


  arrayPedidos: Pedido[]=[]
  formulario: FormGroup
  arraydetalles: Detalle []=[]
  detalles= new Detalle(0,0,0)
  id:number
  idCliente:number;
  formaDePago: string;
  direccion: string;
  detaAux:any
  constructor(private route: Router,private activarRuta: ActivatedRoute, public miServicio: ServiFormService){


  }


  ngOnInit()
 {

    // this.formulario= new FormGroup({
    // idPee: new FormControl(this.id),
    // idProducto: new FormControl(),
    // cantidad: new FormControl()

  // })
  this.activarRuta.params.subscribe(info=>
    { this.id=info['id']
      let nuevoId=this.miServicio.encontrarId(this.id)
        if(nuevoId!=undefined)
        {
          this.formulario= new FormGroup({
          idPedido: new FormControl(this.id),
          idProducto: new FormControl(),
          cantidad: new FormControl()})
        }
      })

 }

 agregarProductos(){
  this.miServicio.agregarcarritoser( new Detalle(this.id,this.formulario.value['idProducto'],this.formulario.value['cantidad']))
  this.formulario.reset()
  }
}
