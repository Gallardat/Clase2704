import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpedidoComponent } from './formpedido/formpedido.component';
import { FormdetalleComponent } from './formdetalle/formdetalle.component';

const routes: Routes = [
  {
    path:"",component:FormpedidoComponent, children:
    [
      {path:"agregardetalles/:id", component:FormdetalleComponent}
    ]

  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
