import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpedidoComponent } from './formpedido/formpedido.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiFormService } from './_servicio/servi-form.service';
import { FormdetalleComponent } from './formdetalle/formdetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    FormpedidoComponent,
    FormdetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
